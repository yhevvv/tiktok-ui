import VideoItem from './VideoItem';
import classNames from 'classnames/bind';
import Style from './Home.module.scss';

function Home() {
    const cx = classNames.bind(Style);
    return (
        <div className={cx('wrapper-all')}>
            <VideoItem></VideoItem>
            <VideoItem></VideoItem>
            <VideoItem></VideoItem>
            <VideoItem></VideoItem>
            <VideoItem></VideoItem>
            <VideoItem></VideoItem>
            <VideoItem></VideoItem>
        </div>
    );
}

export default Home;
