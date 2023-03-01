import React from 'react';
import Style from './Home.module.scss';
import classNames from 'classnames/bind';

import ReactPlayer from 'react-player';

const VideoPlayer = React.forwardRef((props, ref) => {
    const cx = classNames.bind(Style);
    return (
        <div className={cx('video-play')}>
            <ReactPlayer
                onPlay={props.onPlay}
                url={props.url}
                ref={ref}
                className={cx('video-play')}
                controls
                playing={props.isPlaying}
                volume={props.volume}
            ></ReactPlayer>
        </div>
    );
});

export default VideoPlayer;
