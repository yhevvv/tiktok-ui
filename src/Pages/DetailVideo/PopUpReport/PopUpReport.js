import classNames from 'classnames/bind';
import Style from './PopUpReport.module.scss';
import Button from '~/Components/Button';
import { Flag, IconX, ScrollDown } from '~/Components/Icons';
import { useState } from 'react';
import Popup from 'reactjs-popup';

function PopUpReport() {
    const cx = classNames.bind(Style);

    //handle open
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <div className={cx('btn-report')} onClick={handleOpen}>
                <Button blackShadowBtn>
                    <Flag></Flag>Report
                </Button>
            </div>
            <Popup open={open} closeOnDocumentClick>
                <div className={cx('popup-wrapper')}>
                    <div className={cx('header')}>
                        <h4 className={cx('title-header')}>Report</h4>
                        <span className={cx('icon-header')} onClick={handleOpen}>
                            <IconX></IconX>
                        </span>
                    </div>
                    <div className={cx('body')}>
                        <span className={cx('title-body')}>Please select a scenario</span>
                        <label className={cx('label-wrapper')}>
                            <div className={cx('title')}>Minor safety</div>
                            <div className={cx('btn')}>
                                <ScrollDown
                                    width={'20px'}
                                    height={'20px'}
                                ></ScrollDown>
                            </div>
                        </label>
                        <label className={cx('label-wrapper')}>
                            <div className={cx('title')}>
                                Dangerous acts and challenges
                            </div>
                            <div className={cx('btn')}>
                                <ScrollDown
                                    width={'20px'}
                                    height={'20px'}
                                ></ScrollDown>
                            </div>
                        </label>
                        <label className={cx('label-wrapper')}>
                            <div className={cx('title')}>
                                Suicide, self-harm, and disordered eating
                            </div>
                            <div className={cx('btn')}>
                                <ScrollDown
                                    width={'20px'}
                                    height={'20px'}
                                ></ScrollDown>
                            </div>
                        </label>
                        <label className={cx('label-wrapper')}>
                            <div className={cx('title')}>
                                Adult nudity and sexual activities
                            </div>
                            <div className={cx('btn')}>
                                <ScrollDown
                                    width={'20px'}
                                    height={'20px'}
                                ></ScrollDown>
                            </div>
                        </label>
                        <label className={cx('label-wrapper')}>
                            <div className={cx('title')}>
                                Bullying and harassment
                            </div>
                            <div className={cx('btn')}>
                                <ScrollDown
                                    width={'20px'}
                                    height={'20px'}
                                ></ScrollDown>
                            </div>
                        </label>
                        <label className={cx('label-wrapper')}>
                            <div className={cx('title')}>Hateful behavior</div>
                            <div className={cx('btn')}>
                                <ScrollDown
                                    width={'20px'}
                                    height={'20px'}
                                ></ScrollDown>
                            </div>
                        </label>
                        <label className={cx('label-wrapper')}>
                            <div className={cx('title')}>Violent extremism</div>
                            <div className={cx('btn')}>
                                <ScrollDown
                                    width={'20px'}
                                    height={'20px'}
                                ></ScrollDown>
                            </div>
                        </label>
                        <label className={cx('label-wrapper')}>
                            <div className={cx('title')}>
                                Spam and fake engagement
                            </div>
                            <div className={cx('btn')}>
                                <ScrollDown
                                    width={'20px'}
                                    height={'20px'}
                                ></ScrollDown>
                            </div>
                        </label>
                        <label className={cx('label-wrapper')}>
                            <div className={cx('title')}>
                                Harmful misinformation
                            </div>
                            <div className={cx('btn')}>
                                <ScrollDown
                                    width={'20px'}
                                    height={'20px'}
                                ></ScrollDown>
                            </div>
                        </label>
                        <label className={cx('label-wrapper')}>
                            <div className={cx('title')}>
                                IIIegal activities and regulated goods
                            </div>
                            <div className={cx('btn')}>
                                <ScrollDown
                                    width={'20px'}
                                    height={'20px'}
                                ></ScrollDown>
                            </div>
                        </label>
                        <label className={cx('label-wrapper')}>
                            <div className={cx('title')}>
                                Violent and graphic content
                            </div>
                            <div className={cx('btn')}>
                                <ScrollDown
                                    width={'20px'}
                                    height={'20px'}
                                ></ScrollDown>
                            </div>
                        </label>
                        <label className={cx('label-wrapper')}>
                            <div className={cx('title')}>
                                Intellectual property infringement
                            </div>
                            <div className={cx('btn')}>
                                <ScrollDown
                                    width={'20px'}
                                    height={'20px'}
                                ></ScrollDown>
                            </div>
                        </label>
                        <label className={cx('label-wrapper')}>
                            <div className={cx('title')}>Other</div>
                            <div className={cx('btn')}>
                                <ScrollDown
                                    width={'20px'}
                                    height={'20px'}
                                ></ScrollDown>
                            </div>
                        </label>
                    </div>
                </div>
            </Popup>
        </>
    );
}

export default PopUpReport;
