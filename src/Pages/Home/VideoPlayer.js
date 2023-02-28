import React, { useRef, useImperativeHandle } from "react";
import Style from './Home.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(Style)

const VideoPlayer = React.forwardRef((props, ref) => {
  const videoRef = useRef(null);

  const play = () => {
    videoRef.current.play();
  };

  const stop = () => {
    videoRef.current.pause();
  };

  const mute = () => {
    videoRef.current.muted = true;
  };

  const unmute = () => {
    videoRef.current.muted = false;
  };

  const setVolume = (volume) => {
    videoRef.current.volume = volume;
  };

  useImperativeHandle(ref, () => ({
    play,
    stop,
    mute,
    unmute,
    setVolume,
  }));

  return (
    <video ref={videoRef} className={cx('video-play')}>
      <source src={props.src}  />
    </video>
  );
});

export default VideoPlayer;