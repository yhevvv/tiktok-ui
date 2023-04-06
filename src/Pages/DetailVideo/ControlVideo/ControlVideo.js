import classNames from 'classnames/bind';
import Style from './ControlVideo.module.scss';
import Button from '~/Components/Button';
import { Sound } from '~/Components/Icons';

function ControlVideo() {
    const cx = classNames.bind(Style);
    return (
        <>
            <div className={cx('btn-timeline-display')}></div>
            <div className={cx('btn-sound-display')}>
                <Button noneBtn className={cx('btn-sound')}>
                    <Sound></Sound>
                </Button>
            </div>
        </>
    );
}

export default ControlVideo;
