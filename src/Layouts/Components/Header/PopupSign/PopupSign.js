import Popup from 'reactjs-popup';
import Button from '~/Components/Button';
import { useState } from 'react';
import classNames from 'classnames/bind';
import Style from './PopupSign.module.scss';
import { FacebokIcon, GoogleIcon, IconX } from '~/Components/Icons';

function PopupSign({ title }) {
    var cx = classNames.bind(Style);
    const [isOpen, setIsOpen] = useState(false);

    const [handleSwitch, setHandleSwitch] = useState(true);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const toggleSwitch = () => {
        setHandleSwitch(!handleSwitch);
    };

    return (
        <div className={cx('wrapper')}>
            {title === '+ Upload' ? (
                <Button className={cx('btn-text')} text onClick={togglePopup}>
                    {title}
                </Button>
            ) : (
                <Button
                    className={cx('btn-primary')}
                    primary
                    onClick={togglePopup}
                >
                    {title}
                </Button>
            )}
            <Popup open={isOpen} position={'right bottom'} closeOnDocumentClick>
                <div className={cx('popup')}>
                    <span className={cx('close')} onClick={togglePopup}>
                        <IconX></IconX>
                    </span>
                    <h1 className={cx('heading')}>
                        Get more of what you love when you log in to TikTok
                    </h1>
                    <Button text className={cx('btn-choice-sign-1')}>
                        <FacebokIcon className={cx('icon')}></FacebokIcon>
                        Continues With Facebook
                    </Button>
                    <Button text className={cx('btn-choice-sign-2')}>
                        <GoogleIcon className={cx('icon')}></GoogleIcon>
                        Continues With Google
                    </Button>
                    <div className={cx('footer')}>
                        <p>
                            Don’t have an account?
                            <span
                                className={cx('sign-up')}
                                onClick={toggleSwitch}
                            >
                                {handleSwitch ? 'Sign up' : 'Log in'}
                            </span>
                        </p>
                    </div>
                </div>
            </Popup>
        </div>
    );
}

export default PopupSign;
