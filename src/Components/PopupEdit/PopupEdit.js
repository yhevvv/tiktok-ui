import classNames from 'classnames/bind';
import Style from './PopupEdit.module.scss';
import Button from '../Button';
import { Write, IconX, WriteEdit } from '../Icons';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import images from '~/assets/images';
import { Link } from 'react-router-dom';

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
                        <span>Edit profile</span>
                        <span className={cx('close')} onClick={togglePopup}>
                            <IconX></IconX>
                        </span>
                    </div>
                    <div className={cx('body-popup')}>
                        <div className={cx('profile-photo')}>
                            <span className={cx('title')}>Profile photo</span>
                            <div className={cx('upload-avatar')}>
                                <label className={cx('file-input-icon')}>
                                    <img
                                        src={images.avatar1}
                                        alt=""
                                        className={cx('avatar')}
                                    ></img>
                                    <div className={cx('icon-upload')}>
                                        <WriteEdit></WriteEdit>
                                        <input
                                            type={'file'}
                                            className={cx('file-input')}
                                        ></input>
                                    </div>
                                </label>
                            </div>
                            {/* icon here */}
                        </div>
                        <div className={cx('Username')}>
                            <span className={cx('title')}>Username</span>
                            <input
                                type={'text'}
                                className={cx('input-type')}
                            ></input>
                            {/* icon tick */}
                            <Link
                                className={cx('preview-input')}
                                to={'/me/@phamanhtuan2208'}
                            >
                                /me/@phamanhtuan2208
                            </Link>
                            <p className={cx('preview-input')}>
                                Usernames can only contain letters, numbers,
                                underscores, and periods. Changing your username
                                will also change your profile link.
                            </p>
                        </div>
                        <div className={cx('name')}>
                            <span className={cx('title')}>Name</span>
                            <input
                                type={'text'}
                                className={cx('input-name')}
                            ></input>
                            <p className={cx('alert-name')}>
                                Your nickname can only be changed once every 7
                                days.
                            </p>
                        </div>
                        <div className={cx('bio')}>
                            <span className={cx('title-bio')}>Bio</span>
                            <textarea className={cx('textarea-bio')}></textarea>
                            <p className={cx('number-charater')}>0/80</p>
                        </div>
                    </div>
                    <div className={cx('footer-popup')}>
                        <Button text className={cx('button-interact')}>
                            Cancel
                        </Button>
                        <Button className={cx('button-interact')} text disable>
                            Save
                        </Button>
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
