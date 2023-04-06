import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { ScrollDown, ScrollUp } from '~/Components/Icons';
import Style from './Live.module.scss';
import VideoLive from './VideoLive';
import Button from '~/Components/Button';
import { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import * as suggestedService from '~/Service/suggestedService';
import { useInView } from 'react-intersection-observer';
import PopupSign from '~/Components/PopupSign';
import Cookies from 'js-cookie';

function Live() {
    const cx = classNames.bind(Style);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    const [noChangeTab, setNoChangeTab] = useState('btn-tab');
    const [changeTab, setChangeTab] = useState('btn-tab-click');

    const [noChangeLine, setNoChangeLine] = useState('line');
    const [changeLine, setChangeLine] = useState('line-click');

    const [dataUser, setDataUser] = useState([]);

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

    const [pageSuggest, setPageSuggest] = useState(getRandomInt(20));

    useEffect(() => {
        suggestedService
            .getSuggested({ page: pageSuggest, per_page: 5 })
            .then((data) => {
                setDataUser((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((error) => {
                console.log(error);
            });
    });

    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView) {
            setPageSuggest(pageSuggest + 1);
        }
    }, [inView, pageSuggest]);

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
                            {Cookies.get('isToken') === 'null' ? (
                                <PopupSign
                                    className={'btn-following'}
                                    title={'Following'}
                                ></PopupSign>
                            ) : (
                                <Button
                                    white
                                    className={cx(noChangeTab)}
                                    onClick={handleChangeTab}
                                >
                                    {' '}
                                    Following
                                </Button>
                            )}
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
                            <ScrollUp width={'20px'} height={'20px'}></ScrollUp>
                        </button>
                        <button
                            className={cx('btn-scroll-down')}
                            onClick={handleScrollDown}
                        >
                            <ScrollDown width={'20px'} height={'20px'}></ScrollDown>
                        </button>
                    </div>
                    <div className={cx('video-list')}>
                        {dataUser.map((data, index) => (
                            <VideoLive key={index} data={data}></VideoLive>
                        ))}
                    </div>

                    <span ref={ref}></span>
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
                    <div className={cx('video-list')}>
                        {dataUser.map((data, index) => (
                            <VideoLive key={index} data={data}></VideoLive>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Live;
