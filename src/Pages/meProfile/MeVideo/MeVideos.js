import React, { useState, useEffect, memo } from 'react';
import * as ProfileService from '~/Service/ProfileService';
import Style from './MeVideos.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

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
        const video = event.target;
        video.play();
    };

    const handleMouseOut = (event) => {
        const video = event.target;
        video.currentTime = 0;
        video.pause();
    };

    return (
        <div className={cx('wrapper-all')}>
            {userVideo !== undefined &&
                userVideo.map((data) => (
                    <div className={cx('wrapper')}>
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
