import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { ScrollDown, ScrollUp } from '~/Components/Icons';
import Style from './Live.module.scss';
import VideoLive from './VideoLive';
import Button from '~/Components/Button';

function Live() {
    const cx = classNames.bind(Style);

    return (
        <div className={cx('wrapper')}>
            <Tippy
                render={() => (
                    <div className={cx('tippy-wrapper')}>
                        <Button white className={cx('btn-tab')}>
                            ForYou
                        </Button>
                        <Button white className={cx('btn-tab')}>
                            Following{' '}
                        </Button>
                    </div>
                )}
                delay={[0, 700]}
                //visible
                interactive
                placement="bottom"
            >
                <div className={cx('popup-header')}>
                    <div className={cx('wrapper-popup')}>
                        <div className={cx('wrapper-line')}>
                            <div className={cx('line')}></div>
                            <div className={cx('line')}></div>
                        </div>
                    </div>
                </div>
            </Tippy>
            <div className={cx('btn-scroll')}>
                <div className={cx('btn-scroll-up')}>
                    <ScrollUp></ScrollUp>
                </div>
                <div className={cx('btn-scroll-down')}>
                    <ScrollDown></ScrollDown>
                </div>
            </div>
            <VideoLive></VideoLive>
            <VideoLive></VideoLive>
            <VideoLive></VideoLive>
            <VideoLive></VideoLive>
        </div>
    );
}

export default Live;
