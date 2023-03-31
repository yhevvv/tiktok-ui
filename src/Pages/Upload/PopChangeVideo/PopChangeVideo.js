import classNames from 'classnames/bind';
import Popup from 'reactjs-popup';
import Style from './PopChangeVideo.module.scss';
import { useState } from 'react';

function PopChangeVideo() {
    const cx = classNames.bind(Style);

    //logic open/close popup
    const [open, setOpen] = useState(false);

    const handleSetOpen = () => {
        setOpen(!open);
    };

    //remove file (reload page)
    const handleRemoveFile = () => {
        window.location.reload();
    };

    return (
        <div className={cx('wrapper')}>
            <label className={cx('change-video')} onClick={handleSetOpen}>
                Change Video
            </label>
            <Popup open={open} closeOnDocumentClick>
                <div className={cx('popup-wrapper')}>
                    <span className={cx('title')}>Replace this video?</span>
                    <br></br>
                    <p className={cx('description')}>
                        Caption and video settings will still be saved.
                    </p>
                    <div className={cx('replace')} onClick={handleRemoveFile}>
                        Replace
                    </div>
                    <div
                        className={cx('continue-editing')}
                        onClick={handleSetOpen}
                    >
                        Continue Editing
                    </div>
                </div>
            </Popup>
        </div>
    );
}

export default PopChangeVideo;
