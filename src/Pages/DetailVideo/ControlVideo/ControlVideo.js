import classNames from 'classnames/bind';
import Style from './ControlVideo.module.scss';
import Button from '~/Components/Button';
import { Sound, IconX, ScrollDown, ScrollUp } from '~/Components/Icons';
import PopUpReport from '../PopUpReport';
import VideoEx from '~/assets/Videos/ShortVideo/demo.mp4';
import { useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function ControlVideo() {
    const cx = classNames.bind(Style);
    const videoRef = useRef(null);
    const progressBarClassname = cx('progress-bar');

    //get back Href
    const HrefBack = () => {
        window.history.back();
    };

    //play and pause
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlaying = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    //timeLine + countTime
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const handleProgress = () => {
        const video = videoRef.current;
        const progressBar = document.querySelector(`.${progressBarClassname}`);
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.width = `${percent}%`;
        // Update the current time and video
        setCurrentTime(video.currentTime);
    };

    const handleSeek = (e) => {
        const video = videoRef.current;
        const progressBar = document.querySelector(`.${progressBarClassname}`);
        const position = e.pageX - progressBar.offsetLeft;
        const percent = position / progressBar.offsetWidth;
        const newTime = video.duration * percent;
        video.currentTime = newTime;
        // Update the current time and video
        setCurrentTime(newTime);

        // Play the video if it was paused
        if (video.paused) {
            video.play();
        }
    };

    const handleLoadedMetadata = () => {
        const video = videoRef.current;
        setDuration(video.duration);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <div className={cx('video-item')}>
                <div className={cx('item-interact-video')}>
                    {/* icon close */}
                    <div className={cx('close-video')} onClick={HrefBack}>
                        <IconX color={'white'}></IconX>
                    </div>
                    {/* logo */}
                    <div className={cx('image-logo-style')}>
                        <img
                            className={cx('image-logo')}
                            src={images.logoInDetail}
                            alt={images.NoImage}
                        ></img>
                    </div>
                    {/* report */}
                    <PopUpReport></PopUpReport>
                    {/* icon change video up-down */}
                    <div className={cx('change-video')}>
                        <div className={cx('change-video-up')}>
                            <ScrollUp
                                width={'26px'}
                                height={'26px'}
                                color={'white'}
                            ></ScrollUp>
                        </div>
                        <div className={cx('change-video-down')}>
                            <ScrollDown
                                width={'26px'}
                                height={'26px'}
                                color={'white'}
                            ></ScrollDown>
                        </div>
                    </div>
                    {/* timeline video and sound */}
                    <div className={cx('btn-timeline-display')}></div>
                    <div className={cx('btn-sound-display')}>
                        <Button noneBtn className={cx('btn-sound')}>
                            <Sound></Sound>
                        </Button>
                    </div>
                    {/* icon play */}
                    {!isPlaying && (
                        <div className={cx('icon-play')}>
                            <FontAwesomeIcon
                                icon={faPlay}
                                style={{
                                    width: '70px',
                                    height: '70px',
                                    color: '#ffffff',
                                }}
                            ></FontAwesomeIcon>
                        </div>
                    )}
                    {/* timeline */}
                    <div className={cx('display-progress')}>
                        <div
                            className={progressBarClassname}
                            onClick={handleSeek}
                        >
                            <div className={cx('progress')} />
                        </div>
                        <div className={cx('formmat-time')}>
                            <span>{formatTime(currentTime)}</span>/
                            <span>{formatTime(duration)}</span>
                        </div>
                    </div>
                </div>

                <span onClick={handlePlaying}>
                    <video
                        src={VideoEx}
                        className={cx('video')}
                        ref={videoRef}
                        onTimeUpdate={handleProgress}
                        onLoadedMetadata={handleLoadedMetadata}
                    ></video>
                </span>
            </div>
        </>
    );
}

export default ControlVideo;
