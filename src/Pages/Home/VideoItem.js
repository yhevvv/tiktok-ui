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

const cx = classNames.bind(Style);

function VideoItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Link>
                    <Image
                        className={cx('avatar')}
                        src={''}
                        alt={images.NoImage}
                    ></Image>
                </Link>
                <Link className={cx('id_nickname')}>
                    <h3 className={cx('id')}>QuanDoiABC</h3>
                    <FontAwesomeIcon
                        className={cx('tick')}
                        icon={faCircleCheck}
                    ></FontAwesomeIcon>
                    <h4 className={cx('nickname')}>World Army</h4>
                </Link>
                <Button outline className={cx('btn-follow')}>
                    Follow
                </Button>
            </div>
            <span className={cx('description')}>
                Nga tạm dừng tham gia Hiệp ước New START, thế giới đứng trước
                nguy cơ chiến tranh hạt nhân
                <strong className={cx('hashtag')}>#russia #vietnam #quansuthegioi</strong>
            </span>
            <h4 className={cx('music-tag')}>
                <MusicNote></MusicNote> Nhạc cực chiến ngầu đét - DDC
            </h4>
            <div className={cx('position-fix')}>
                <video
                    className={cx('video-play')}
                    src={Videos}
                    controls
                ></video>
                <div className={cx('interact')}>
                    <Button noneBtn className={cx('btn-interact')}>
                        <span className={cx('icon-item')}>
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        </span>
                        <strong className={cx('count-item')}>276.6K</strong>
                    </Button>
                    <Button noneBtn className={cx('btn-interact')}>
                        <span className={cx('icon-item')}>
                            <FontAwesomeIcon
                                icon={faCommentDots}
                            ></FontAwesomeIcon>
                        </span>
                        <strong className={cx('count-item')}>276.6K</strong>
                    </Button>
                    <Button noneBtn className={cx('btn-interact')}>
                        <span className={cx('icon-item')}>
                            <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>
                        </span>
                        <strong className={cx('count-item')}>276.6K</strong>
                    </Button>
                </div>
            </div>
            <hr className={cx('hr-item')}></hr>
        </div>
    );
}

export default VideoItem;
