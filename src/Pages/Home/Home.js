import VideoItem from './VideoItem';
import classNames from 'classnames/bind';
import Style from './Home.module.scss';

import * as homeService from '~/Service/homeService';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Home() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const TYPE = 'for-you';
    const cx = classNames.bind(Style);

    const [videos, setGetVideos] = useState([]);

    useEffect(() => {
        const INIT_PAGE_VIDEO = getRandomInt(21);
        homeService
            .home(TYPE, INIT_PAGE_VIDEO)
            .then((data) => {
                setGetVideos(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className={cx('wrapper-all')}>
            {videos.map((data) => (
                <VideoItem key={data.id} data={data}></VideoItem>
            ))}
        </div>
    );
}

Home.propTypes = {
    data: PropTypes.object
};

export default Home;
