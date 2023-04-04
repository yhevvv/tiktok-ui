import Style from './unFollowingProfiles.module.scss';
import classNames from 'classnames/bind';
import GetApp from '~/Components/GetApp';
import Button from '~/Components/Button';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Share,
    Dot,
    Lock,
    UserIconLager,
    FriendCheck,
} from '~/Components/Icons';
import MenuShare from '~/Components/MenuShare';
import MenuReport from '~/Components/MenuReport';
import * as profileService from '~/Service/profileService';
import MeVideos from './unFollowingVideo/unFollowingVideo';
import Cookies from 'js-cookie';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import * as FollowingService from '~/Service/Following/FollowingService';
import PopupSign from '~/Components/PopupSign';
import Tippy from '@tippyjs/react';
import * as CheckFollowingService from '~/Service/Following/CheckFollowingService';

function Profile() {
    const cx = classNames.bind(Style);

    const [noClick, setNoClick] = useState('tab-noClick');
    const [Click, setClick] = useState('tab-Click');

    const [isHovering, setIsHovering] = useState(0);
    const [isSwitch, setIsSwitch] = useState(true);

    const [nickNameFriend, setNickNameFriend] = useState([]);

    const handleNoClick = () => {
        setNoClick('tab-noClick');
        setClick('tab-Click');
        setIsSwitch(true);
    };

    const handleClick = () => {
        setNoClick('tab-Click');
        setClick('tab-noClick');
        setIsSwitch(false);
    };

    const onMouseLiked = () => {
        if (noClick === 'tab-Click') {
            setIsHovering(230);
        } else {
            setIsHovering(0);
        }
    };

    const onMouseVideos = () => {
        if (Click === 'tab-Click') {
            setIsHovering(0);
        } else {
            setIsHovering(230);
        }
    };

    //get href
    const currentHref = window.location.href;
    let username = currentHref.substring(currentHref.lastIndexOf('/@') + 2);

    useEffect(() => {
        profileService
            .Profile({ nickname: username })
            .then((data) => {
                setNickNameFriend(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [username]);

    //api following & logic signup
    const [changeFollowing, setChangeFollowing] = useState(false);
    const handleFollowing = async () => {
        const token = Cookies.get('isToken');
        if (
            Cookies.get('isToken') !== undefined &&
            Cookies.get('isToken') !== 'null'
        ) {
            try {
                await FollowingService.Following({
                    token: token,
                    id_nickname: nickNameFriend.id,
                });
            } catch (error) {
                console.log(error);
            }
            setChangeFollowing(!changeFollowing);
        }
    };

    //api unfollowing
    const [changeUnFollowing, setChangeUnFollowing] = useState(true);
    const handleUnFollowing = async () => {
        setChangeUnFollowing(!changeUnFollowing);
    };

    //api check following (get list following)
    const [checkFollowing, setCheckFollowing] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (
            Cookies.get('isToken') !== undefined &&
            Cookies.get('isToken') !== 'null'
        ) {
            CheckFollowingService.CheckFollowing({
                token: Cookies.get('isToken'),
                page: page,
            })
                .then((data) => {
                    setCheckFollowing((prev) => [...prev, ...data]);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        if (page < checkFollowing.length / 5) {
            setPage(page + 1);
        }
    }, [checkFollowing.length, page]);

    const checkFollowingID = [];
    for (let i = 0; i < checkFollowing.length; i++) {
        checkFollowingID.push(checkFollowing[i].id);
    }

    return (
        <>
            {nickNameFriend ? (
                <div className={cx('wrapper')}>
                    <div className={cx('profile-item')}>
                        <img
                            className={cx('avatar')}
                            src={
                                nickNameFriend.avatar ===
                                'https://files.fullstack.edu.vn/f8-tiktok/'
                                    ? images.NoImage
                                    : nickNameFriend.avatar
                            }
                            alt=""
                        ></img>
                        <div className={cx('title-container')}>
                            <h1 className={cx('name')}>
                                {nickNameFriend.first_name +
                                    ' ' +
                                    nickNameFriend.last_name}{' '}
                                {nickNameFriend.tick && (
                                    <FontAwesomeIcon
                                        style={{
                                            color: '#20d5ec',
                                            width: '20px',
                                            height: '20px',
                                        }}
                                        icon={faCircleCheck}
                                    ></FontAwesomeIcon>
                                )}
                            </h1>
                            <h3 className={cx('nickname')}>
                                {nickNameFriend.nickname}
                            </h3>
                            {checkFollowingID.includes(nickNameFriend.id) ===
                            false ? (
                                <div className={cx('outline-editProfile')}>
                                    {changeFollowing ? (
                                        <div className={cx('btn-after-follow')}>
                                            <Button
                                                outline
                                                className={cx('message')}
                                            >
                                                Messages
                                            </Button>
                                            <Tippy
                                                delay={[0, 100]}
                                                offset={[12, 8]}
                                                content="Unfollow"
                                                placement="bottom"
                                            >
                                                <div className={cx('unfollow')}>
                                                    <Button
                                                        text
                                                        className={cx(
                                                            'unfollow-btn',
                                                        )}
                                                        onClick={
                                                            handleFollowing
                                                        }
                                                    >
                                                        <FriendCheck></FriendCheck>
                                                    </Button>
                                                </div>
                                            </Tippy>
                                        </div>
                                    ) : (
                                        <>
                                            {Cookies.get('isToken') !==
                                                undefined &&
                                            Cookies.get('isToken') !==
                                                'null' ? (
                                                <Button
                                                    primary
                                                    className={cx(
                                                        'btn-editProfile',
                                                    )}
                                                    onClick={handleFollowing}
                                                >
                                                    <strong
                                                        className={cx(
                                                            'btn-text',
                                                        )}
                                                    >
                                                        Follow
                                                    </strong>
                                                </Button>
                                            ) : (
                                                <PopupSign
                                                    className="btn-editProfile"
                                                    title="Follow"
                                                ></PopupSign>
                                            )}
                                        </>
                                    )}
                                </div>
                            ) : (
                                <div className={cx('outline-editProfile')}>
                                    {changeUnFollowing ? (
                                        <div className={cx('btn-after-follow')}>
                                            <Button
                                                outline
                                                className={cx('message')}
                                            >
                                                Messages
                                            </Button>
                                            <Tippy
                                                delay={[0, 100]}
                                                offset={[12, 8]}
                                                content="Unfollow"
                                                placement="bottom"
                                            >
                                                <div className={cx('unfollow')}>
                                                    <Button
                                                        text
                                                        className={cx(
                                                            'unfollow-btn',
                                                        )}
                                                        onClick={
                                                            handleUnFollowing
                                                        }
                                                    >
                                                        <FriendCheck></FriendCheck>
                                                    </Button>
                                                </div>
                                            </Tippy>
                                        </div>
                                    ) : (
                                        <>
                                            {Cookies.get('isToken') !==
                                                undefined &&
                                            Cookies.get('isToken') !==
                                                'null' ? (
                                                <Button
                                                    primary
                                                    className={cx(
                                                        'btn-editProfile',
                                                    )}
                                                    onClick={handleUnFollowing}
                                                >
                                                    <strong
                                                        className={cx(
                                                            'btn-text',
                                                        )}
                                                    >
                                                        Follow
                                                    </strong>
                                                </Button>
                                            ) : (
                                                <PopupSign
                                                    className="btn-editProfile"
                                                    title="Follow"
                                                ></PopupSign>
                                            )}
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                        <br></br>
                        <div className={cx('btn-share')}>
                            <MenuShare icon={<Share></Share>}></MenuShare>
                            <MenuReport icon={<Dot></Dot>}></MenuReport>
                        </div>
                    </div>
                    <h2 className={cx('statistical')}>
                        <div className={cx('statistical-item')}>
                            <strong className={cx('number-following')}>
                                {nickNameFriend.followings_count === null
                                    ? '0'
                                    : nickNameFriend.followings_count}
                            </strong>
                            <span className={cx('following')}>Following</span>
                        </div>
                        <div className={cx('statistical-item')}>
                            <strong className={cx('number-followers')}>
                                {nickNameFriend.followers_count === null
                                    ? '0'
                                    : nickNameFriend.followers_count}
                            </strong>
                            <span className={cx('followers')}>Followers</span>
                        </div>
                        <div className={cx('statistical-item')}>
                            <strong className={cx('number-like')}>
                                {nickNameFriend.likes_count === null
                                    ? '0'
                                    : nickNameFriend.likes_count}
                            </strong>
                            <span className={cx('like')}>likes</span>
                        </div>
                    </h2>
                    <h2 className={cx('bio')}>{nickNameFriend.bio}</h2>
                    <div className={cx('videos-user')}>
                        <div className={cx('tab')}>
                            <p
                                className={cx(Click)}
                                onClick={handleNoClick}
                                onMouseOver={() => setIsHovering(0)}
                                onMouseOut={onMouseVideos}
                            >
                                Videos
                            </p>
                            <p
                                className={cx(noClick)}
                                onClick={handleClick}
                                onMouseOver={() => setIsHovering(230)}
                                onMouseOut={onMouseLiked}
                            >
                                <Lock></Lock>Liked
                            </p>
                        </div>
                        <motion.div
                            className={cx('transform-animation')}
                            animate={{ x: isHovering }}
                        ></motion.div>
                        <div style={{ display: 'none' }}>
                            <MeVideos></MeVideos>{' '}
                        </div>
                        {/* code hoi ngu xiu nhung luoi qua */}
                        {isSwitch ? (
                            <>
                                {Cookies.get('unFollowVideo') ? (
                                    <div className={cx('meVideo')}>
                                        <MeVideos
                                            nickname={nickNameFriend.nickname}
                                        ></MeVideos>
                                    </div>
                                ) : (
                                    <main className={cx('videos-item')}>
                                        <div className={cx('obtainer')}>
                                            <p>
                                                <UserIconLager
                                                    width={'9rem'}
                                                    height={'9rem'}
                                                ></UserIconLager>
                                            </p>
                                            <p className={cx('line-1')}>
                                                Upload your first video
                                            </p>
                                            <p className={cx('line-2')}>
                                                Your videos will appear here
                                            </p>
                                        </div>
                                    </main>
                                )}
                            </>
                        ) : (
                            <main className={cx('videos-item')}>
                                <div className={cx('obtainer')}>
                                    <p>
                                        <UserIconLager
                                            width={'9rem'}
                                            height={'9rem'}
                                        ></UserIconLager>
                                    </p>
                                    <p className={cx('line-1')}>
                                        No liked videos yet
                                    </p>
                                    <p className={cx('line-2')}>
                                        Videos you liked will appear here
                                    </p>
                                </div>
                            </main>
                        )}
                    </div>
                    <GetApp></GetApp>
                </div>
            ) : (
                <main className={cx('videos-item')}>
                    <div className={cx('obtainer-notFound')}>
                        <p>
                            <UserIconLager
                                width={'9rem'}
                                height={'9rem'}
                            ></UserIconLager>
                        </p>
                        <p className={cx('lineNotFound-1')}>
                            Couldn't find this account
                        </p>
                        <p className={cx('lineNotFound-2')}>
                            Looking for videos? Try browsing our trending
                            creators, hashtags, and sounds.
                        </p>
                    </div>
                </main>
            )}
        </>
    );
}

export default Profile;
