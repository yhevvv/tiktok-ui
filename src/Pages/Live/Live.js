import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { ScrollDown, ScrollUp } from '~/Components/Icons';
import Style from './Live.module.scss';
import VideoLive from './VideoLive';
import Button from '~/Components/Button';
import { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';

function Live() {
    const cx = classNames.bind(Style);

    const [noChangeTab, setNoChangeTab] = useState('btn-tab');
    const [changeTab, setChangeTab] = useState('btn-tab-click');

    const [noChangeLine, setNoChangeLine] = useState('line');
    const [changeLine, setChangeLine] = useState('line-click');

    function handleChangeTab() {
        const saveTab = noChangeTab;
        setNoChangeTab(changeTab);
        setChangeTab(saveTab);
        const saveLine = noChangeLine;
        setNoChangeLine(changeLine);
        setChangeLine(saveLine);
    }

    const handleScrollDown = () => {
        animateScroll.scrollMore(window.innerHeight - 90);
    };
    const handleScrollUp = () => {
        animateScroll.scrollMore(-window.innerHeight + 90);
    };

    useEffect(() => {
        function handleScroll(event) {
            // Check if the scroll is up or down
            const isScrollingUp = event.deltaY < 0;

            // Calculate the new scroll position
            const newScrollTop = isScrollingUp
                ? window.pageYOffset - window.innerHeight + 90
                : window.pageYOffset + window.innerHeight - 90;

            // Scroll the window to the new position
            window.scrollTo({ top: newScrollTop, behavior: 'smooth' });

            // Prevent the default scroll behavior
            event.preventDefault();
        }

        // Attach the scroll event listener to the window
        window.addEventListener('wheel', handleScroll);

        // Remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            {/* tippy fix div */}
            <div>
                <Tippy
                    render={() => (
                        <div className={cx('tippy-wrapper')}>
                            <Button
                                white
                                className={cx(changeTab)}
                                onClick={handleChangeTab}
                            >
                                ForYou
                            </Button>
                            <Button
                                white
                                className={cx(noChangeTab)}
                                onClick={handleChangeTab}
                            >
                                Following
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
                                <div className={cx(noChangeLine)}></div>
                                <div className={cx(changeLine)}></div>
                            </div>
                        </div>
                    </div>
                </Tippy>
            </div>
            {noChangeTab === 'btn-tab' ? (
                <div>
                    <div className={cx('btn-scroll')}>
                        <button
                            className={cx('btn-scroll-up')}
                            onClick={handleScrollUp}
                        >
                            <ScrollUp></ScrollUp>
                        </button>
                        <button
                            className={cx('btn-scroll-down')}
                            onClick={handleScrollDown}
                        >
                            <ScrollDown></ScrollDown>
                        </button>
                    </div>
                    <VideoLive></VideoLive>
                    <VideoLive></VideoLive>
                    <VideoLive></VideoLive>
                    <VideoLive></VideoLive>
                    <VideoLive></VideoLive>
                    <VideoLive></VideoLive>
                </div>
            ) : (
                <div>
                    <div className={cx('btn-scroll')}>
                        <div
                            className={cx('btn-scroll-up')}
                            onClick={handleScrollUp}
                        >
                            <ScrollUp></ScrollUp>
                        </div>
                        <div
                            className={cx('btn-scroll-down')}
                            onClick={handleScrollDown}
                        >
                            <ScrollDown></ScrollDown>
                        </div>
                    </div>
                    <VideoLive></VideoLive>
                    <VideoLive></VideoLive>
                    <VideoLive></VideoLive>
                    <VideoLive></VideoLive>
                </div>
            )}
        </div>
    );
}

export default Live;
