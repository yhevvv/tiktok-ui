import Style from './meProfile.module.scss';
import classNames from 'classnames/bind';
import GetApp from '~/Components/GetApp';
import { useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Share, Lock, UserIconLager } from '~/Components/Icons';
import MenuShare from '~/Components/MenuShare';
import * as meProfileService from '~/Service/meProfileService';
import Cookies from 'js-cookie';
import MeVideos from './MeVideo/MeVideos';
import PopupEdit from '~/Components/PopupEdit';


function Profile() {
    const cx = classNames.bind(Style);

    const [noClick, setNoClick] = useState('tab-noClick');
    const [Click, setClick] = useState('tab-Click');

    const [isHovering, setIsHovering] = useState(0);
    const [isSwitch, setIsSwitch] = useState(true);

    const [profileUser, setProfileUser] = useState([]);

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
    
    const isToken = Cookies.get('isToken');

    useLayoutEffect(() => {
        meProfileService
            .meProfile({ token: isToken })
            .then((data) => {
                setProfileUser(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [isToken, profileUser.nickname]);


    return (
        
        <div className={cx('wrapper')}>
            <div className={cx('profile-item')}>
                <img
                    className={cx('avatar')}
                    src={profileUser.avatar}
                    alt=""
                ></img>
                <div className={cx('title-container')}>
                    <h1 className={cx('name')}>
                        {profileUser.first_name + ' ' + profileUser.last_name}
                    </h1>
                    <h3 className={cx('nickname')}>{profileUser.nickname}</h3>
                    <div className={cx('outline-editProfile')}>
                        <PopupEdit title={'Edit profile'}></PopupEdit>
                    </div>
                </div>
                <br></br>
                <div className={cx('btn-share')}>
                    <MenuShare icon={<Share></Share>}></MenuShare>
                </div>
            </div>
            <h2 className={cx('statistical')}>
                <div className={cx('statistical-item')}>
                    <strong className={cx('number-following')}>
                        {profileUser.followings_count == null
                            ? '0'
                            : profileUser.followings_count}
                    </strong>
                    <span className={cx('following')}>Following</span>
                </div>
                <div className={cx('statistical-item')}>
                    <strong className={cx('number-followers')}>
                        {profileUser.followers_count == null
                            ? '0'
                            : profileUser.followers_count}
                    </strong>
                    <span className={cx('followers')}>followers</span>
                </div>
                <div className={cx('statistical-item')}>
                    <strong className={cx('number-like')}>
                        {profileUser.likes_count}
                    </strong>
                    <span className={cx('like')}>likes</span>
                </div>
            </h2>
            <h2 className={cx('bio')}>{profileUser.bio}</h2>
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
                        {Cookies.get('userVideo') ? (
                            <div className={cx('meVideo')}>
                                <MeVideos
                                    nickname={profileUser.nickname}
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
                            <p className={cx('line-1')}>No liked videos yet</p>
                            <p className={cx('line-2')}>
                                Videos you liked will appear here
                            </p>
                        </div>
                    </main>
                )}
            </div>
            <GetApp></GetApp>
        </div>

    );
}

export default Profile;
