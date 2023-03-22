import React, { useState, useEffect, memo } from 'react';
import Style from './unFollowingVideos.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import * as ProfileService from '~/Service/profileService'

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
    Cookies.set('unFollowVideo', userVideo);

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
                        <span
                            className={cx('description')}
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            key={index}

                        >
                            {data.description}
                        </span>
                    </div>
                ))}
        </div>
    );
}

MeVideos.propTypes = {
    nickname: PropTypes.string,
};

export default memo(MeVideos);
