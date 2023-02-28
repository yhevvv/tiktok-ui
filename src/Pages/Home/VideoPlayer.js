import React from 'react';
import Style from './Home.module.scss';
import classNames from 'classnames/bind';

import ReactPlayer from 'react-player';

const VideoPlayer = React.forwardRef((props, ref) => {
    const cx = classNames.bind(Style);
    return (
        <ReactPlayer
            onPlay
            url={props.url}
            ref={ref}
            className={cx('video-play')}
            controls
            height={'600px'}
            width={'500px'}
            playing={props.isPlaying}
            volume={'0.2'}
        ></ReactPlayer>
    );
});

export default VideoPlayer;
