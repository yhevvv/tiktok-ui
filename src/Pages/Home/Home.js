import VideoItem from './VideoItem';
import classNames from 'classnames/bind';
import Style from './Home.module.scss';

import * as homeService from '~/Service/homeService';
import { useEffect, useState, memo } from 'react';
import { useInView } from 'react-intersection-observer';
import GetApp from '~/Components/GetApp';

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
            setInitPage(initPage + 1);
        }
    }, [inView, initPage]);

    console.clear()

    return (
        <div className={cx('wrapper-all')}>
            <GetApp></GetApp>
            {videos.map((data) => (
                <VideoItem key={data.id} data={data}></VideoItem>
            ))}
            <span ref={ref}></span>
        </div>
    );
}

export default memo(Home);
