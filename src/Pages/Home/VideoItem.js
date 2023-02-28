import classNames from 'classnames/bind';
import images from '~/assets/images';
import Image from '~/Components/Image';
import Style from './Home.module.scss';
import { Link } from 'react-router-dom';
import Button from '~/Components/Button';
import { MusicNote } from '~/Components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleCheck,
    faCommentDots,
    faHeart,
    faShare,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import VideoPlayer from './VideoPlayer';
import { useState, useRef } from 'react';

function VideoItem({ data }) {
    const cx = classNames.bind(Style);

    const videoRef = useRef(null);

    const handlePlay = () => {
        videoRef.current.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        videoRef.current.stop();
        setIsPlaying(false);
    };

    const handleVolumeChange = (volume) => {
        videoRef.current.setVolume(volume);
    };

    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Link>
                    <Image
                        className={cx('avatar')}
                        src={data.user.avatar}
                        alt={images.NoImage}
                    ></Image>
                </Link>
                <Link className={cx('id_nickname')}>
                    <h3 className={cx('id')}>
                        {data.user.first_name} {data.user.last_name}
                    </h3>
                    {data.user.tick && (
                        <FontAwesomeIcon
                            className={cx('tick')}
                            icon={faCircleCheck}
                        ></FontAwesomeIcon>
                    )}
                    <h4 className={cx('nickname')}>{data.user.nickname}</h4>
                </Link>
                <Button outline className={cx('btn-follow')}>
                    Follow
                </Button>
            </div>

            <span className={cx('description')}>
                {data.description}
                <strong className={cx('hashtag')}>#vietnam</strong>
            </span>
            <h4 className={cx('music-tag')}>
                <MusicNote></MusicNote> {data.music}
            </h4>
            <div className={cx('position-fix')}>
                <VideoPlayer
                    src={data.file_url}
                    poster={data.thumb_url}
                    ref={videoRef}
                ></VideoPlayer>
                <input
                    className={cx('range-volume')}
                    type="range"
                    min={0}
                    max={1}
                    step={0.1}
                    defaultValue={1}
                    onChange={(event) => handleVolumeChange(event.target.value)}
                />
                <div className={cx('interact')}>
                    <Button noneBtn className={cx('btn-interact')}>
                        <span className={cx('icon-item')}>
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        </span>
                        <strong className={cx('count-item')}>
                            {data.likes_count}
                        </strong>
                    </Button>
                    <Button noneBtn className={cx('btn-interact')}>
                        <span className={cx('icon-item')}>
                            <FontAwesomeIcon
                                icon={faCommentDots}
                            ></FontAwesomeIcon>
                        </span>
                        <strong className={cx('count-item')}>
                            {data.comments_count}
                        </strong>
                    </Button>
                    <Button noneBtn className={cx('btn-interact')}>
                        <span className={cx('icon-item')}>
                            <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>
                        </span>
                        <strong className={cx('count-item')}>
                            {data.shares_count}
                        </strong>
                    </Button>
                </div>
            </div>
            <Button
                className={cx('btn-playing')}
                noneBtn
                onClick={isPlaying ? handlePause : handlePlay}
            >
                {isPlaying ? 'pause' : 'play'}
            </Button>
            <hr className={cx('hr-item')}></hr>
        </div>
    );
}

VideoItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default VideoItem;
