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
import { useState, useRef, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '~/Components/Popper';
import AccountPreview from './AccountPreview';

function VideoItem({ data }) {
    const cx = classNames.bind(Style);

    const playerRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(true);
    const { ref, inView } = useInView({
        threshold: 0.7,
        delay: 500,
    });

    useEffect(() => {
        if (inView) {
            setIsPlaying(true);
        } else if (!inView) {
            setIsPlaying(false);
        }
    }, [inView]);

    const previewUser = () => {
        return (
            <div>
                <PropperWrapper>
                    <AccountPreview data={data.user}></AccountPreview>
                </PropperWrapper>
            </div>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <div>
                <Tippy
                    render={previewUser}
                    interactive
                    delay={[700, 700]}
                    offset={[0, -5]}
                    placement={'bottom-start'}
                    hideOnClick={true}
                >
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
                            <h4 className={cx('nickname')}>
                                {data.user.nickname}
                            </h4>
                        </Link>
                    </div>
                </Tippy>
            </div>
            <div className={cx('btn')}>
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
                    url={data.file_url}
                    ref={playerRef}
                    isPlaying={isPlaying}
                    volume={0.2}
                ></VideoPlayer>
                <div className={cx('interact')} ref={ref}>
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
            <hr className={cx('hr-item')} ></hr>
        </div>
    );
}

VideoItem.propTypes = {
    data: PropTypes.shape({
        user: PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            first_name: PropTypes.string.isRequired,
            last_name: PropTypes.string.isRequired,
            nickname: PropTypes.string.isRequired,
            tick: PropTypes.bool,
        }).isRequired,
        description: PropTypes.string.isRequired,
        music: PropTypes.string.isRequired,
        file_url: PropTypes.string.isRequired,
        likes_count: PropTypes.number.isRequired,
        comments_count: PropTypes.number.isRequired,
        shares_count: PropTypes.number.isRequired,
    }).isRequired,
};

export default VideoItem;
