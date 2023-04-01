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
import LogoCheck from '~/assets/images/Logo/check.svg';
import { useState, memo, useEffect, useRef } from 'react';
import PopChangeVideo from './PopChangeVideo';
import VideoThumbnail from 'react-video-thumbnail';
import PopLearnMore from './PopLearnMore';
import { ICircle, TickCheck } from '~/Components/Icons';
import Footer from '~/Layouts/Components/Footer';
import PopDiscard from './PopDiscard';

function Upload() {
    const cx = classNames.bind(Style);

    //logic checkbox
    const [isCheckedComment, setisCheckedComment] = useState(true);

    const handleisCheckedComment = () => {
        setisCheckedComment(!isCheckedComment);
    };

    const [isCheckedDuet, setisCheckedDuet] = useState(true);

    const handleisCheckedDuet = () => {
        setisCheckedDuet(!isCheckedDuet);
    };

    const [isCheckedStitch, setisCheckedStitch] = useState(true);

    const handleisCheckedStitch = () => {
        setisCheckedStitch(!isCheckedStitch);
    };

    //alert reload page when file existed
    const [fileInputValue, setFileInputValue] = useState('');

    useEffect(() => {
        if (fileInputValue !== '') {
            const handleBeforeUnload = (event) => {
                event.returnValue = '';
            };
            window.addEventListener('beforeunload', handleBeforeUnload);
            return () => {
                window.removeEventListener('beforeunload', handleBeforeUnload);
            };
        }
    }, [fileInputValue]);

    //timeline video
    const [videoFile, setVideoFile] = useState(null);
    const [videoUrl, setVideoUrl] = useState('');

    function handleVideoSelect(event) {
        const selectFile = event.target.files[0];
        setVideoFile(selectFile);
        setVideoUrl(URL.createObjectURL(selectFile));
        setFileInputValue(event.target.value);
    }

    //caption
    const [text, setText] = useState('');

    const handleChange = (event) => {
        const inputText = event.target.innerText;
        if (inputText.length <= 2200) {
            setText(inputText);
        } else {
            event.target.textContent = inputText.substring(0, 2200);
            setText(inputText.substring(0, 2200));
            alert('Maximum 2200 Characters');
        }
    };

    //hashTag click
    const [isActive, setIsActive] = useState(true);
    const inputRef = useRef(null);
    const HashTagRef = useRef(null);

    const handleHashTag = () => {
        //focus on span
        setIsActive(!isActive);
        inputRef.current.focus();

        const range = document.createRange();
        const sel = window.getSelection();

        // Check if the span element is empty
        if (inputRef.current.textContent === '') {
            // Create a new text node and insert it at the beginning of the span element
            const textNode = document.createTextNode('');
            inputRef.current.appendChild(textNode);

            // Set the range to the beginning of the text node
            range.setStart(textNode, 0);
            range.collapse(true);
        } else {
            // Set the range to the end of the span element's text content
            range.setStart(
                inputRef.current.childNodes[0],
                inputRef.current.textContent.length,
            );
            range.collapse(true);
        }

        sel.removeAllRanges();
        sel.addRange(range);

        // get a reference to the contentEditable span
        const inputCaption = HashTagRef.current;

        // execute the "insertHTML" command to insert the "#" character at the current cursor position
        document.execCommand('insertHTML', false, '#');

        // set the focus back to the contentEditable span
        inputCaption.focus();
    };

    // //Friend Following when click At Icon

    //At click
    const RefAT = useRef(null);
    const handleAt = () => {
        // //change display following
        // setAfterClickAT(!afterClickAT);

        //focus on span
        setIsActive(!isActive);
        inputRef.current.focus();

        const range = document.createRange();
        const sel = window.getSelection();

        // Check if the span element is empty
        if (inputRef.current.textContent === '') {
            // Create a new text node and insert it at the beginning of the span element
            const textNode = document.createTextNode('');
            inputRef.current.appendChild(textNode);

            // Set the range to the beginning of the text node
            range.setStart(textNode, 0);
            range.collapse(true);
        } else {
            // Set the range to the end of the span element's text content
            range.setStart(
                inputRef.current.childNodes[0],
                inputRef.current.textContent.length,
            );
            range.collapse(true);
        }

        sel.removeAllRanges();
        sel.addRange(range);

        // get a reference to the contentEditable span
        const inputCaption = RefAT.current;

        // execute the "insertHTML" command to insert the "#" character at the current cursor position
        document.execCommand('insertHTML', false, '@');

        // set the focus back to the contentEditable span
        inputCaption.focus();
    };

    console.clear();
    //console.log(text);

    //timeline image cut from video upload
    const [duration, setDuration] = useState(null);

    const generateThumbnails = (videoFile) => {
        const video = document.createElement('video');

        video.addEventListener('loadedmetadata', () => {
            setDuration(Math.round(video.duration));
        });

        video.src = URL.createObjectURL(videoFile);

        const thumbnailList = [];
        for (let i = 0; i < Math.floor(duration / 5); i++) {
            const time = i * 0.5 * 10;
            const thumbnail = (
                <VideoThumbnail
                    videoUrl={URL.createObjectURL(videoFile)}
                    snapshotAtTime={time}
                    key={i}
                />
            );
            thumbnailList.push(thumbnail);
        }

        return thumbnailList;
    };

    //ios touch
    const [touch, setTouch] = useState(false);
    const handleTouch = () => {
        setTouch(!touch);
    };

    //css Select
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
            <div className={cx('wrapper')}>
                <HeaderFull></HeaderFull>
                <div className={cx('title')}>
                    <span className={cx('title-1')}>Upload video</span>
                    <br></br>
                    <span className={cx('title-2')}>
                        Post a video your account
                    </span>
                </div>
                <div className={cx('display')}>
                    {videoUrl === '' ? (
                        <div>
                            <label
                                htmlFor={'input-file'}
                                className={cx('video-upload')}
                            >
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
                                <p className={cx('title-video3')}>
                                    MP4 or WEBM
                                </p>
                                <span className={cx('title-video3')}>
                                    720x1280 resolution or higher
                                </span>
                                <p className={cx('title-video3')}>
                                    Up to 30 minutes
                                </p>
                                <span className={cx('title-video3')}>
                                    Less than 2GB
                                </span>
                                <br></br>
                                <div className={cx('btn-video-upload')}>
                                    Select File
                                </div>
                            </label>
                            <input
                                type={'file'}
                                style={{ display: 'none' }}
                                id={'input-file'}
                                onChange={handleVideoSelect}
                                onDrop={handleVideoSelect}
                                accept="video/*"
                            ></input>
                        </div>
                    ) : (
                        <div className={cx('wrapper-video')}>
                            <video
                                src={videoUrl}
                                controls
                                style={{
                                    width: '260px',
                                    height: '458px',
                                    borderRadius: '25px',
                                }}
                            ></video>
                            <div className={cx('info-video')}>
                                <img
                                    src={LogoCheck}
                                    alt=""
                                    style={{
                                        width: '16px',
                                        height: '16px',
                                        marginTop: '11px',
                                    }}
                                ></img>
                                <span className={cx('file-name')}>
                                    {videoFile.name}
                                </span>
                                <PopChangeVideo></PopChangeVideo>
                            </div>
                        </div>
                    )}

                    <div className={cx('display-2')}>
                        <div className={cx('caption')}>
                            <div className={cx('display-4')}>
                                <span className={cx('title-caption')}>
                                    Caption
                                </span>
                            </div>
                            <span className={cx('count-item')}>
                                {text?.length} / 2200
                            </span>
                            <span
                                ref={inputRef}
                                className={cx('input-caption')}
                                contentEditable={'true'}
                                onInput={handleChange}
                                key="input-caption"
                            >
                                {videoFile?.name}
                            </span>
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
                                    onClick={handleAt}
                                ></img>
                                <img
                                    src={hashTag}
                                    alt=""
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        cursor: 'pointer',
                                    }}
                                    onClick={handleHashTag}
                                ></img>
                            </span>
                        </div>
                        <div className={cx('cover')}>
                            <span className={cx('title-cover')}>Cover</span>
                            <div className={cx('input-cover')}>
                                {videoFile && (
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                        }}
                                    >
                                        {generateThumbnails(videoFile)}
                                    </div>
                                )}
                            </div>
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
                                        checked={isCheckedComment}
                                        onChange={handleisCheckedComment}
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
                                        checked={isCheckedDuet}
                                        onChange={handleisCheckedDuet}
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
                                        checked={isCheckedStitch}
                                        onChange={handleisCheckedStitch}
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
                                    <IOSTouch onChange={handleTouch}></IOSTouch>
                                </span>
                            </div>
                            {touch === false ? (
                                <div className={cx('descriptions-copyright')}>
                                    <p
                                        className={cx(
                                            'descriptions-copyright-1',
                                        )}
                                    >
                                        We'll check your video for potential
                                        copyright infringements on used sounds.
                                        If infringements are found, you can edit
                                        the video before posting.{' '}
                                        <span
                                            className={cx(
                                                'descriptions-copyright-2',
                                            )}
                                        >
                                            <PopLearnMore></PopLearnMore>
                                        </span>
                                    </p>
                                </div>
                            ) : (
                                <p className={cx('descriptions-copyright-3')}>
                                    {videoFile === null ? (
                                        <>
                                            <ICircle></ICircle> 'Copyright check
                                            will not begin until your video is
                                            uploaded.'
                                        </>
                                    ) : (
                                        <>
                                            <TickCheck
                                                width={'1.2rem'}
                                                height={'1.2rem'}
                                            ></TickCheck>{' '}
                                            No issues detected.
                                            <p
                                                className={cx(
                                                    'descriptions-copyright-1',
                                                )}
                                            >
                                                Note: Results of copyright
                                                checks aren't final. For
                                                instance, future changes of the
                                                copyright holder's authorization
                                                to the sound may impact your
                                                video may impact your video.{' '}
                                                <span
                                                    className={cx(
                                                        'descriptions-copyright-2',
                                                    )}
                                                >
                                                    <br></br>
                                                    <PopLearnMore></PopLearnMore>
                                                </span>
                                            </p>
                                        </>
                                    )}
                                </p>
                            )}
                        </div>
                        <div className={cx('btn-submit')}>
                            <PopDiscard></PopDiscard>
                            <Button
                                primary
                                className={cx('btn-submit-post')}
                                disable={videoFile === null}
                            >
                                Post
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default memo(Upload);
