import classNames from 'classnames/bind';
import images from '~/assets/images';
import Image from '~/Components/Image';
import Style from './Home.module.scss';
import { Link } from 'react-router-dom';
import Button from '~/Components/Button';
import { MusicNote } from '~/Components/Icons';
import Videos from '~/assets/Videos/ShortVideo/demo.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleCheck,
    faCommentDots,
    faHeart,
    faShare,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const cx = classNames.bind(Style);

function VideoItem({ data }) {
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
                    <h3 className={cx('id')}>{data.user.first_name} {data.user.last_name}</h3>
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
                <strong className={cx('hashtag')}>
                    #vietnam
                </strong>
            </span>
            <h4 className={cx('music-tag')}>
                <MusicNote></MusicNote> {data.music}
            </h4>
            <div className={cx('position-fix')}>
                <video
                    className={cx('video-play')}
                    src={data.file_url}
                    controls
                    poster={data.thumb_url}
                ></video>
                <div className={cx('interact')}>
                    <Button noneBtn className={cx('btn-interact')}>
                        <span className={cx('icon-item')}>
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        </span>
                        <strong className={cx('count-item')}>{data.likes_count}</strong>
                    </Button>
                    <Button noneBtn className={cx('btn-interact')}>
                        <span className={cx('icon-item')}>
                            <FontAwesomeIcon
                                icon={faCommentDots}
                            ></FontAwesomeIcon>
                        </span>
                        <strong className={cx('count-item')}>{data.comments_count}</strong>
                    </Button>
                    <Button noneBtn className={cx('btn-interact')}>
                        <span className={cx('icon-item')}>
                            <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>
                        </span>
                        <strong className={cx('count-item')}>{data.shares_count}</strong>
                    </Button>
                </div>
            </div>
            <hr className={cx('hr-item')}></hr>
        </div>
    );
}

VideoItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default VideoItem;
