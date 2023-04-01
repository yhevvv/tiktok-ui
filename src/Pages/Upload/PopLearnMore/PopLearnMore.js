import classNames from 'classnames/bind';
import Popup from 'reactjs-popup';
import Style from './PopLearnMore.module.scss';
import { useState } from 'react';
import Button from '~/Components/Button';

function PopLearnMore() {
    const cx = classNames.bind(Style);

    //set open popup
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <>
            <span onClick={handleOpen}>Learn more</span>
            <div>
                <Popup open={open}>
                    <div className={cx('wrapper')}>
                        <p className={cx('title')}>
                            How copyright checks work
                            <div className={cx('line')}></div>
                        </p>
                        <span className={cx('text')}>
                            Run a copyright check on sounds you used before
                            posting your video to identify potential copyright
                            infringements. If issues are found, you can edit
                            your video before posting.
                        </span>
                        <p className={cx('text')}>
                            You can still post a video that has been flagged for
                            copyright infringement. However, the video will be
                            muted to protect the rights of unauthorized sounds.
                        </p>
                        <p className={cx('text')}>
                            Note: Results of copyright checks aren't final. For
                            instance, future changes of the copyright holder's
                            authorization to the sound may impact your video.
                        </p>
                        <p className={cx('line')}></p>
                        <Button primary className={cx('btn')} onClick={handleOpen}>
                            Ok
                        </Button>
                    </div>
                </Popup>
            </div>
        </>
    );
}

export default PopLearnMore;
