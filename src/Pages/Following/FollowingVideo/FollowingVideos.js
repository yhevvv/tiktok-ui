import React, { useState, useEffect, memo } from 'react';
import Style from './FollowingVideos.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import * as ProfileService from '~/Service/profileService';
import images from '~/assets/images';
import Button from '~/Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import GetApp from '~/Components/GetApp';

function MeVideos({ nickname }) {
    const cx = classNames.bind(Style);
    const [videoUser, setVideoUser] = useState([]);

    useEffect(() => {
        if (nickname !== undefined) {
            ProfileService.Profile({ nickname: nickname })
                .then((getData) => {
                    setVideoUser(getData);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [nickname]);

    const userVideo = videoUser.videos;
    Cookies.set('userVideo', userVideo);

    const handleMouseOver = (event) => {
        const video = event.target.parentElement.querySelector('video');
        video.play();
    };

    const handleMouseOut = (event) => {
        const video = event.target.parentElement.querySelector('video');
        video.currentTime = 0;
        video.pause();
    };

    return (
        <div className={cx('wrapper-all')}>
            {userVideo !== undefined &&
                userVideo.map((data, index) => (
                    <div className={cx('wrapper')} key={index}>
                        <video
                            className={cx('video-item')}
                            src={data.file_url}
                            key={data.id}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            muted
                        ></video>
                        <div className={cx('profile-wrapper')}>
                            <img
                                src={images.NoImage}
                                alt={''}
                                className={cx('image')}
                            ></img>
                            <p className={cx('username')}>Username</p>
                            <span className={cx('nickname')}>
                                Nickname{''}
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    style={{
                                        color: '#20d5ec',
                                        width: '12px',
                                        height: '12px',
                                        margin: '0 0 0 5px',
                                    }}
                                ></FontAwesomeIcon>
                            </span>
                            <Button primary className={cx('btn-follow')}>
                                Follow
                            </Button>
                        </div>
                    </div>
                ))}
            <GetApp></GetApp>
        </div>
    );
}

MeVideos.propTypes = {
    nickname: PropTypes.string,
};

export default memo(MeVideos);
