import VideoItem from './VideoItem';
import classNames from 'classnames/bind';
import Style from './Home.module.scss';

import * as homeService from '~/Service/homeService';
import { useEffect, useState, memo } from 'react';
import { useInView } from 'react-intersection-observer';
import GetApp from '~/Components/GetApp';
import ScrollTopPage from '~/Components/ScrollTopPage';

function Home() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const TYPE = 'for-you';
    const cx = classNames.bind(Style);
    const INIT_PAGE = getRandomInt(20);

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

    const handleClickTop = () => {
        setShowButton(false);
    };


    return (
        <div className={cx('wrapper-all')} onWheel={handleScroll}>
            <GetApp></GetApp>
            {showButton && (
                <div onClick={handleClickTop}>
                    <ScrollTopPage></ScrollTopPage>
                </div>
            )}
            {videos.map((data) => (
                <VideoItem key={data.id} data={data}></VideoItem>
            ))}
            <span ref={ref}></span>
        </div>
    );
}

export default memo(Home);
