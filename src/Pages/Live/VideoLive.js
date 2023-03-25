import classNames from 'classnames/bind';
import Style from './Live.module.scss';

import Demo from '~/assets/Videos/ShortVideo/demo.mp4';
import { Link } from 'react-router-dom';
import Button from '~/Components/Button';
import { GroupIconLive } from '~/Components/Icons';

function VideoLive() {
    const cx = classNames.bind(Style);

    return (
        <>
            <video src={Demo} controls className={cx('liveVideo')}></video>
            <div className={cx('profile')}>
                <Button primary className={cx('btn-live')}>LIVE</Button> 
                <br></br>
                <Link to={`/@phamanhtuan2208`}>
                    <span className={cx('nickname')}>
                        @phamanhtuan2208
                        <span className={cx('viewer')}> <GroupIconLive className={cx('icon-group')}></GroupIconLive> 90</span>
                    </span>
                    <div className={cx('title')}>Title Live</div>
                </Link>
            </div>
        </>
    );
}

export default VideoLive;
