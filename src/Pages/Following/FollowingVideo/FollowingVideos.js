import React, { useState, useEffect, memo } from 'react';
import Style from './FollowingVideos.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import * as suggestedService from '~/Service/suggestedService';
import images from '~/assets/images';
import Button from '~/Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import GetApp from '~/Components/GetApp';
import { useInView } from 'react-intersection-observer';

function MeVideos() {
    const cx = classNames.bind(Style);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const [initPage, setInitPage] = useState(getRandomInt(8));
    const [videoUser, setVideoUser] = useState([]);

    useEffect(() => {
        suggestedService
            .getSuggested({ page: initPage, per_page: 20 })
            .then((getData) => {
                setVideoUser((prevUsers) => [...prevUsers, ...getData]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [initPage]);

    const { ref, inView } = useInView({
        threshold: 0,
    });
    useEffect(() => {
        if (inView) {
            setInitPage(initPage + 1);
        }
    }, [inView, initPage]);

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
            {videoUser.map((data, index) => (
                <div className={cx('wrapper')} key={index}>
                    <video
                        className={cx('video-item')}
                        src={data.popular_video.file_url}
                        key={data.popular_video.id}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        muted
                    ></video>
                    <div className={cx('profile-wrapper')}>
                        <img
                            src={
                                data.avatar !==
                                'https://files.fullstack.edu.vn/f8-tiktok/'
                                    ? data.avatar
                                    : images.NoImage
                            }
                            alt={''}
                            className={cx('image')}
                        ></img>
                        <p className={cx('username')}>
                            {data.first_name !== '' || data.last_name !== ''
                                ? data.first_name + ' ' + data.last_name
                                : 'undefined name'}
                        </p>
                        <span className={cx('nickname')}>
                            {data.nickname}
                            {data.tick === true && (
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    style={{
                                        color: '#20d5ec',
                                        width: '12px',
                                        height: '12px',
                                        margin: '0 0 0 5px',
                                    }}
                                ></FontAwesomeIcon>
                            )}
                        </span>
                        <Button primary className={cx('btn-follow')}>
                            Follow
                        </Button>
                        <span ref={ref}></span>
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
