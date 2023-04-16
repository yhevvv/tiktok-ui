import classNames from 'classnames/bind';
import Style from './DetailVideo.module.scss';

import images from '~/assets/images';
import Button from '~/Components/Button';
import {
    Embed,
    FacebokIcon,
    MusicNote,
    ShareBlack,
    ShareTo,
    Twitter,
    WhatsApp,
} from '~/Components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleCheck,
    faCommentDots,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import MenuShareLite from '~/Components/MenuShareLite';
import ControlVideo from './ControlVideo';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import * as homeService2 from '~/Service/homeService2';
import { useNavigate } from 'react-router-dom';
import FollowingBtn from './FollowingBtn';
import HandleLike from './HandleLike';
import ListComment from './ListComment';
import YourComment from './YourComment';

function DetailVideo() {
    const cx = classNames.bind(Style);

    //get href
    const currentHref = window.location.href;
    //copy href
    function handleCopyClick() {
        navigator.clipboard.writeText(currentHref);
    }

    //api detail video from Home
    const INIT_PAGE = Cookies.get('initpage');
    const TYPE = 'for-you';
    const [videos, setGetVideos] = useState([]);
    useEffect(() => {
        homeService2
            .home(TYPE, INIT_PAGE)
            .then((data) => {
                setGetVideos((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((error) => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //log

    //change video

    const navigate = useNavigate();

    const [change, setChange] = useState(Cookies.get('IndexVideo'));
    const handleClickNext = () => {
        setChange(change + 1);
        navigate(
            `/@${videos[change + 1]?.user?.nickname}/video/${
                videos[change + 1]?.id
            }`,
        );
    };
    const handleClickBack = () => {
        if (change > 0) {
            setChange(change - 1);
            navigate(
                `/@${videos[change - 1]?.user?.nickname}/video/${
                    videos[change - 1]?.id
                }`,
            );
        }
    };

    return (
        <body className={cx('wrapper')}>
            {/* controlVideo */}
            <ControlVideo
                data={videos[change] || 'null'}
                handleClickNext={handleClickNext}
                handleClickBack={handleClickBack}
            ></ControlVideo>
            {/* interact item */}
            <div className={cx('interact-item')}>
                <div className={cx('me-profile')}>
                    <img
                        className={cx('avatar-me-profile')}
                        src={videos[change]?.user?.avatar}
                        alt={images.NoImage}
                    ></img>
                    <div className={cx('detail-me-profile')}>
                        <span className={cx('name-me-profile')}>
                            {videos[change]?.user?.first_name === '' ||
                            videos[change]?.user?.last_name === ''
                                ? 'undefined'
                                : videos[change]?.user?.first_name +
                                  ' ' +
                                  videos[change]?.user?.last_name}
                        </span>
                        {videos[change]?.user?.tick && (
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                    color: '#20d5ec',
                                    width: '14px',
                                    height: '14px',
                                }}
                            ></FontAwesomeIcon>
                        )}
                        <br></br>
                        <span className={cx('nickname-me-profile')}>
                            {videos[change]?.user?.nickname}
                        </span>
                        <span className={cx('time-me-profile')}>
                            {' '}
                            · {videos[change]?.published_at}
                        </span>
                    </div>
                    <FollowingBtn
                        data={videos[change] || 'null'}
                    ></FollowingBtn>
                </div>
                <div className={cx('title-me-profile')}>
                    <p className={cx('title-main')}>
                        {videos[change]?.description}{' '}
                        <span className={cx('hastag-main')}>#Vietnam</span>
                    </p>
                    <div className={cx('title-music')}>
                        <MusicNote></MusicNote> {videos[change]?.music}
                    </div>
                </div>
                <div className={cx('interact-profile-display')}>
                    <div className={cx('interact-profile')}>
                        <div className={cx('reaction')}>
                            {/* like react */}
                            <HandleLike data={videos[change]}></HandleLike>
                            <span className={cx('reaction-comment')}>
                                <FontAwesomeIcon
                                    icon={faCommentDots}
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                    }}
                                ></FontAwesomeIcon>
                            </span>
                            <span className={cx('count-comment')}>
                                {videos[change]?.comments_count}
                            </span>
                            <div className={cx('share')}>
                                <Tippy content={'Embed'}>
                                    <div className={cx('icon-share')}>
                                        <Embed
                                            width={'24px'}
                                            height={'24px'}
                                        ></Embed>
                                    </div>
                                </Tippy>
                                <Tippy content={'Send to friend'}>
                                    <div className={cx('icon-share')}>
                                        <ShareTo
                                            width={'24px'}
                                            height={'24px'}
                                        ></ShareTo>
                                    </div>
                                </Tippy>
                                <Tippy content={'Share to Facebook'}>
                                    <div className={cx('icon-share')}>
                                        <FacebokIcon
                                            width={'24px'}
                                            height={'24px'}
                                        ></FacebokIcon>
                                    </div>
                                </Tippy>
                                <Tippy content={'Share to WhatsApp'}>
                                    <div className={cx('icon-share')}>
                                        <WhatsApp
                                            width={'24px'}
                                            height={'24px'}
                                        ></WhatsApp>
                                    </div>
                                </Tippy>
                                <Tippy content={'Share to Twitter'}>
                                    <div className={cx('icon-share')}>
                                        <Twitter
                                            width={'24px'}
                                            height={'24px'}
                                        ></Twitter>
                                    </div>
                                </Tippy>
                                <MenuShareLite
                                    icon={
                                        <>
                                            <div
                                                className={cx('icon-share')}
                                                style={{ marginTop: '3px' }}
                                            >
                                                <ShareBlack
                                                    width={'16px'}
                                                    height={'16px'}
                                                ></ShareBlack>
                                            </div>
                                        </>
                                    }
                                ></MenuShareLite>
                            </div>
                        </div>
                        <div className={cx('href-share-item')}>
                            <div className={cx('href')}>{currentHref}</div>
                            <Button
                                className={cx('btn-copy')}
                                text
                                onClick={handleCopyClick}
                            >
                                Copy Link
                            </Button>
                        </div>
                    </div>
                </div>
                <ListComment data={videos[change]}></ListComment>
                <YourComment data={videos[change]}></YourComment>
            </div>
        </body>
    );
}

export default DetailVideo;
