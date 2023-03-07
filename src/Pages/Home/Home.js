import VideoItem from './VideoItem';
import classNames from 'classnames/bind';
import Style from './Home.module.scss';

import * as homeService from '~/Service/homeService';
import { useEffect, useState } from 'react';
import GetApp from '~/Components/GetApp';


function Home() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const TYPE = 'for-you';
    const cx = classNames.bind(Style);
    const INIT_PAGE = getRandomInt(21);

    const [videos, setGetVideos] = useState([]);

    useEffect(() => {
        homeService
            .home(TYPE, INIT_PAGE)
            .then((data) => {
                setGetVideos(data);
            })
            .catch((error) => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('wrapper-all')}>
            <GetApp></GetApp>

            {videos.map((data) => (
                <VideoItem key={data.id} data={data}></VideoItem>
            ))}
        </div>
    );
}

export default Home;
