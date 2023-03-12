import classNames from 'classnames/bind';
import Style from './PopupEdit.module.scss';
import Button from '../Button';
import { Write, IconX, WriteEdit, TickCheck } from '../Icons';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import Popup from 'reactjs-popup';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function PopupEdit({ title }) {
    const [click, setClick] = useState(false);

    const [valueName, setValueName] = useState('');
    const [valueName2, setValueName2] = useState('');
    const [valueBio, setValueBio] = useState('');

    const [showTick, setShowTick] = useState(false);
    const [showSpinner, setShowSpinner] = useState(true);
    const prevValueNameRef = useRef('');

    useEffect(() => {
        if (valueName.length < 6) {
            // Reset component
            setShowSpinner(true);
            setShowTick(false);
            return;
        }

        if (valueName !== prevValueNameRef.current) {
            // Reset component
            setShowSpinner(true);
            setShowTick(false);
        }

        const timer = setTimeout(() => {
            setShowSpinner(false);
            setShowTick(true);
        }, 700);

        prevValueNameRef.current = valueName;

        return () => clearTimeout(timer);
    }, [valueName]);
    //set value name
    function handleInputChangeUsername(event) {
        setValueName(event.target.value);
    }
    //set value name2
    function handleInputChangeUsername2(event) {
        setValueName2(event.target.value);
    }
    //set value Bio
    function handleInputChangeBio(event) {
        setValueBio(event.target.value);
    }

    const togglePopup = () => {
        setClick(!click);
    };

    const cx = classNames.bind(Style);

    //shortenedValueName
    const shortenedValueName =
        valueName.length > 10 ? `${valueName.substring(0, 45)}` : valueName;
    //charater special
    const hasSpecialChar = /[`~!@#$%^&*()+=[\]{};':"\\|,.<>/?-]/.test(
        valueName,
    );

    //condition name border red
    const conditionName = cx({
        'input-type-nameWarn':
            (valueName.length >= 1 && valueName.length < 6) ||
            valueName.length > 24 ||
            valueName.indexOf(' ') !== -1 ||
            hasSpecialChar,
        'input-type-name':
            valueName.length <= 0 ||
            (valueName.length >= 6 && valueName.length <= 24),
    });
    //condition name 2 border red
    const conditionName2 = cx({
        'input-name': valueName2.length <= 30,
        'input-type-name2Warn': valueName2.length > 30,
    });

    //condition Bio border red
    const conditionBio = cx({
        'textarea-bio': valueBio.length <= 80,
        'textarea-bio-warning': valueBio.length > 80,
    });
    //condition Bio number length value
    const conditionBioLength = cx({
        'bioLength-warn': valueBio.length > 80,
    });

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
                        </div>
                        <div className={cx('Username')}>
                            <span className={cx('title')}>Username</span>
                            <input
                                type={'text'}
                                className={conditionName}
                                placeholder={'Username'}
                                value={valueName}
                                onChange={handleInputChangeUsername}
                            ></input>

                            {valueName.length >= 6 &&
                                valueName.length <= 24 &&
                                valueName.indexOf(' ') === -1 && (
                                    <div className={cx('icon-interact')}>
                                        {showSpinner && (
                                            <FontAwesomeIcon
                                                className={cx('loading')}
                                                icon={faSpinner}
                                            ></FontAwesomeIcon>
                                        )}
                                        {showTick && <TickCheck />}
                                    </div>
                                )}
                            <br></br>
                            {valueName.indexOf(' ') !== -1 || hasSpecialChar ? (
                                <span className={cx('input-type-warn')}>
                                    must not contain spaces, special characters,
                                    except "_" in the name
                                </span>
                            ) : (
                                <>
                                    {valueName.length < 6 &&
                                        valueName.length >= 1 && (
                                            <span
                                                className={cx(
                                                    'input-type-warn',
                                                )}
                                            >
                                                include at least 6 charaters in
                                                your name
                                            </span>
                                        )}
                                    {valueName.length > 24 && (
                                        <span className={cx('input-type-warn')}>
                                            Maximum 24 characters
                                        </span>
                                    )}
                                </>
                            )}
                            <br></br>
                            <Link
                                className={cx('preview-inputHref')}
                                to={`/me/@${valueName}`}
                            >
                                .../me/@{shortenedValueName}
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
                                className={conditionName2}
                                placeholder={'Name'}
                                value={valueName2}
                                onChange={handleInputChangeUsername2}
                            ></input>
                            {valueName2.length <= 30 ? (
                                <p className={cx('alert-name')}>
                                    Your nickname can only be changed once every
                                    7 days.
                                </p>
                            ) : (
                                <p className={cx('input-type-warn')}>
                                    Maximum 30 characters
                                </p>
                            )}
                        </div>
                        <div className={cx('bio')}>
                            <span className={cx('title-bio')}>Bio</span>
                            <textarea
                                className={conditionBio}
                                placeholder={'Bio'}
                                value={valueBio}
                                onChange={handleInputChangeBio}
                            ></textarea>
                            <p className={cx('number-charater')}>
                                <span className={conditionBioLength}>
                                    {valueBio.length}/
                                </span>
                                80
                            </p>
                        </div>
                    </div>
                    <div className={cx('footer-popup')}>
                        <Button
                            text
                            className={cx('button-interact')}
                            onClick={togglePopup}
                        >
                            Cancel
                        </Button>
                        <Button
                            
                            primary
                            disable={
                                valueName.length < 6 ||
                                valueName.length > 24 ||
                                valueName.indexOf(' ') !== -1 ||
                                valueName2.length > 30 ||
                                valueBio.length > 80
                            }
                        >
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
