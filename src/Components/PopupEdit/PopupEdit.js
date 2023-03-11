import classNames from 'classnames/bind';
import Style from './PopupEdit.module.scss';
import Button from '../Button';
import { Write, IconX } from '../Icons';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Popup from 'reactjs-popup';

function PopupEdit({ title, className }) {
    const [click, setClick] = useState(false);

    const togglePopup = () => {
        setClick(!click);
    };

    const cx = classNames.bind(Style);
    return (
        <div className={cx('wrapper')}>
            <Button
                text
                className={cx('btn-editProfile')}
                onClick={togglePopup}
            >
                <Write></Write>
                <strong className={cx('btn-text')}>{title}</strong>
            </Button>
            <Popup open={click} position={'right bottom'} closeOnDocumentClick>
                <div className={cx('popup')}>
                    <div className={cx('header-popup')}>
                        <h2>Edit profile</h2>
                        <span className={cx('close')} onClick={togglePopup}>
                            <IconX></IconX>
                        </span>
                    </div>
                    <hr className={cx('hr-item')}></hr>
                    <div className={cx('body-popup')}>
                        <div className={cx('profile-photo')}>
                            
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    );
}

PopupEdit.protoTypes = {
    title: PropTypes.string,
    classNames: PropTypes.string,
};

export default PopupEdit;
