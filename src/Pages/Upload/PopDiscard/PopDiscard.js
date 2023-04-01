import classNames from 'classnames/bind';
import Style from './PopDiscard.module.scss';
import Button from '~/Components/Button';
import Popup from 'reactjs-popup';
import { useState } from 'react';

function PopDiscard() {
    const cx = classNames.bind(Style);

    //popup open
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    //reload page
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <>
            <Button
                text
                className={cx('btn-submit-discard')}
                onClick={handleOpen}
            >
                Discard
            </Button>
            <Popup open={open}>
                <div className={cx('wrapper')}>
                    <p className={cx('title')}>Discard this post?</p>
                    <p className={cx('text')}>
                        The video and all edits will be discarded.
                    </p>
                    <br></br>
                    <Button
                        primary
                        onClick={handleReload}
                        className={cx('btn-discard')}
                    >
                        Discard
                    </Button>
                    <br></br>
                    <Button
                        text
                        onClick={handleOpen}
                        className={cx('btn-edit')}
                    >
                        Continue editing
                    </Button>
                </div>
            </Popup>
        </>
    );
}

export default PopDiscard;
