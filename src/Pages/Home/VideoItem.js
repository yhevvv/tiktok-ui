import classNames from 'classnames/bind';
import images from '~/assets/images';
import Image from '~/Components/Image';
import Style from './Home.module.scss';
import { Link } from 'react-router-dom';
import Button from '~/Components/Button';
import { MusicNote } from '~/Components/Icons';
import Videos from '~/assets/Videos/ShortVideo/demo.mp4';

const cx = classNames.bind(Style);

function VideoItem() {
    return (
        <div className={cx('wrapper')}>
            <Link>
                <Image
                    className={cx('avatar')}
                    src={''}
                    alt={images.NoImage}
                ></Image>
            </Link>
            <div className={cx('video-status')}>
                <div className={cx('content')}>
                    <Link>
                        <h3 className={cx('id')}>QuanDoiABC</h3>
                        <h4 className={cx('nickname')}>World Army</h4>
                    </Link>
                    <Button outline>Follow</Button>
                    <span className={cx('description')}>
                        Nga tạm dừng tham gia Hiệp ước New START, thế giới đứng
                        trước nguy cơ chiến tranh hạt nhân #russia #vietnam
                        #quansuthegioi
                    </span>
                    <h4 className={cx('music-tag')}>
                        <MusicNote></MusicNote> Nhạc cực chiến ngầu đét - DDC
                    </h4>
                </div>
            </div>
            <div className={cx('video-play')}>
                <video src={Videos} controls>
                </video>
            </div>
            <div className={cx('interact')}>
                <Button noneBtn>
                    <span className={cx('icon-item')}>
                        {/*icon */} hello
                    </span>
                    <strong className={cx('count-item')}>276.6K</strong>
                </Button>
                <hr className={cx('hr-item')}></hr>
            </div>
        </div>
    );
}

export default VideoItem;
