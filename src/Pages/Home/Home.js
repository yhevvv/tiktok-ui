import VideoItem from './VideoItem';
import classNames from 'classnames/bind';
import Style from './Home.module.scss';

import * as homeService from '~/Service/homeService';
import { useEffect, useState, memo } from 'react';
import { useInView } from 'react-intersection-observer';
import GetApp from '~/Components/GetApp';
import ScrollTopPage from '~/Components/ScrollTopPage';
import Cookies from 'js-cookie';

function Home() {
    const TYPE = 'for-you';
    const cx = classNames.bind(Style);
    const INIT_PAGE = 7;

    const [initPage, setInitPage] = useState(INIT_PAGE);
    const [videos, setGetVideos] = useState([]);

    useEffect(() => {
        homeService
            .home(TYPE, initPage)
            .then((data) => {
                setGetVideos((prevUsers) => [...prevUsers, ...data]);
            })
            .catch((error) => console.log(error));
    }, [initPage]);

    const { ref, inView } = useInView({
        threshold: 0,
    });

    Cookies.set('initpage', INIT_PAGE);

    useEffect(() => {
        if (inView) {
            setInitPage(initPage + 5);
        }
    }, [inView, initPage]);

    const [showButton, setShowButton] = useState(false);

    const handleScroll = (event) => {
        if (event.deltaY > 0) {
            setShowButton(true);
        }
        if (window.scrollY === 0) {
            setShowButton(false);
        }
    };

    //top page
    const handleClickTop = () => {
        setShowButton(false);
    };

    const handleIndexVideo = (index) => {
        Cookies.set('IndexVideo', index);
    };

    return (
        <div className={cx('wrapper-all')} onWheel={handleScroll}>
            <GetApp></GetApp>
            {showButton && (
                <div onClick={handleClickTop}>
                    <ScrollTopPage></ScrollTopPage>
                </div>
            )}
            {videos.map((data, index) => (
                <div onClick={() => handleIndexVideo(index)}>
                    <VideoItem key={index} data={data}></VideoItem>
                </div>
            ))}
            <span ref={ref}></span>
        </div>
    );
}

export default memo(Home);
