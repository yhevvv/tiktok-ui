import HeaderFull from '~/Layouts/Components/HeaderFull';
import classNames from 'classnames/bind';
import Style from './Upload.module.scss';
import Button from '~/Components/Button';
import IOSTouch from '~/Components/Button/IOSTouch';
import Select from 'react-select';
import mode_upload from './mode_upload.json';
import logoUpload from '~/assets/images/Logo/logoUpload.svg';
import hashTag from '~/assets/images/Logo/HashTag.svg';
import AtTag from '~/assets/images/Logo/AtTag.svg';

function Upload() {
    const cx = classNames.bind(Style);

    const customStyles = {
        control: (provider) => ({
            ...provider,
            border: ' 0.5px solid rgba(22,24,35,0.12);',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            boxShadow: '0 0 0 0.5px  rgba(22,24,35,0.12);',
            ':hover': {
                border: ' 1px solid rgba(22,24,35,0.12);',
            },
        }),
        option: (provider) => ({
            ...provider,
            color: 'black',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            ':active': {
                backgroundColor: 'transparent',
            },
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
    };

    return (
        <div className={cx('wrapper-full')}>
            <HeaderFull></HeaderFull>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    <span className={cx('title-1')}>Upload video</span>
                    <br></br>
                    <span className={cx('title-2')}>
                        Post a video your account
                    </span>
                </div>
                <div className={cx('display')}>
                    <div className={cx('video-upload')}>
                        <img
                            src={logoUpload}
                            alt=""
                            className={cx('icon-upload')}
                        ></img>
                        <span className={cx('title-video1')}>
                            Select video to upload
                        </span>
                        <span className={cx('title-video2')}>
                            Or drag and drop a file
                        </span>
                        <br></br>
                        <p className={cx('title-video3')}>MP4 or WEBM</p>
                        <span className={cx('title-video3')}>
                            720x1280 resolution or higher
                        </span>
                        <p className={cx('title-video3')}>Up to 30 minutes</p>
                        <span className={cx('title-video3')}>
                            Less than 2GB
                        </span>
                        <input type={'file'}></input>
                        <br></br>
                        <Button primary className={cx('btn-video-upload')}>
                            Select File
                        </Button>
                    </div>
                    <div className={cx('display-2')}>
                        <div className={cx('caption')}>
                            <div className={cx('display-4')}>
                                <span className={cx('title-caption')}>
                                    Caption
                                </span>
                                <span className={cx('count-item')}>
                                    0 / 2200
                                </span>
                            </div>
                            <span
                                className={cx('input-caption')}
                                contentEditable="true"
                            ></span>
                            <span className={cx('display-input-caption')}>
                                <img
                                    src={AtTag}
                                    alt=""
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        cursor: 'pointer',
                                        marginRight: '5px',
                                    }}
                                ></img>
                                <img
                                    src={hashTag}
                                    alt=""
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        cursor: 'pointer',
                                    }}
                                ></img>
                            </span>
                        </div>
                        <div className={cx('cover')}>
                            <span className={cx('title-cover')}>Cover</span>
                            <div className={cx('input-cover')}></div>
                        </div>
                        <div className={cx('mode')}>
                            <span className={cx('title-mode')}>
                                Who can watch this video
                            </span>
                            {/* <select className={cx('select-mode')}>
                                <option value="Public">Public</option>
                                <option value="Friends">Friends</option>
                                <option value="Private">Private</option>
                            </select> */}
                            <Select
                                className={cx('select-mode')}
                                options={mode_upload}
                                defaultValue={mode_upload[0]}
                                styles={customStyles}
                            ></Select>
                        </div>
                        <div className={cx('allow')}>
                            <p className={cx('title-allow')}>Allow user to:</p>

                            <div className={cx('display-3')}>
                                <label className={cx('container')}>
                                    <input
                                        type={'checkbox'}
                                        className={cx('title-ck-comment')}
                                    ></input>
                                    <span className={cx('title-all')}>
                                        Comment
                                    </span>
                                    <span className={cx('checkmark')}></span>
                                </label>
                                <label className={cx('container')}>
                                    <input
                                        type={'checkbox'}
                                        className={cx('title-ck-duet')}
                                    ></input>
                                    <span className={cx('title-all')}>
                                        Duet
                                    </span>
                                    <span className={cx('checkmark')}></span>
                                </label>
                                <label className={cx('container')}>
                                    <input
                                        type={'checkbox'}
                                        className={cx('title-ck-stitch')}
                                    ></input>
                                    <span className={cx('title-all')}>
                                        Stitch
                                    </span>
                                    <span className={cx('checkmark')}></span>
                                </label>
                            </div>
                        </div>
                        <div className={cx('copyright')}>
                            <div className={cx('title-copyright')}>
                                <span className={cx('title-copyright-1')}>
                                    <span className={cx('title-copyright-2')}>
                                        Run a copy check
                                    </span>
                                    <IOSTouch></IOSTouch>
                                </span>
                            </div>
                            <div className={cx('descriptions-copyright')}>
                                <p className={cx('descriptions-copyright-1')}>
                                    We'll check your video for potential
                                    copyright infringements on used sounds. If
                                    infringements are found, you can edit the
                                    video before posting.{' '}
                                    <span
                                        className={cx(
                                            'descriptions-copyright-2',
                                        )}
                                    >
                                        Learn more
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className={cx('btn-submit')}>
                            <Button text className={cx('btn-submit-discard')}>
                                Discard
                            </Button>
                            <Button primary className={cx('btn-submit-post')}>
                                Post
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
