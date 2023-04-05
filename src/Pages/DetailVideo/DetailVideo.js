import classNames from 'classnames/bind';
import Style from './DetailVideo.module.scss';
import VideoEx from '~/assets/Videos/ShortVideo/demo.mp4';
import images from '~/assets/images';
import Button from '~/Components/Button';

function DetailVideo() {
    const cx = classNames.bind(Style);
    return (
        <body className={cx('wrapper')}>
            <div className={cx('video-item')}>
                {/* icon close */}
                {/* logo */}
                {/* report */}
                {/* icon change video up-down */}
                {/* timeline video and sound */}
                <video src={VideoEx} controls className={cx('video')}></video>
                {/* map */}
            </div>
            <div className={cx('interact-item')}>
                <div className={cx('me-profile')}>
                    <img
                        className={cx('avatar-me-profile')}
                        src={images.avatar1}
                        alt={images.NoImage}
                    ></img>
                    <div className={cx('detail-me-profile')}>
                        <span className={cx('name-me-profile')}>YourName</span>
                        <br></br>
                        <span className={cx('nickname-me-profile')}>
                            NickName
                        </span>
                        <span className={cx('time-me-profile')}>
                            {' '}
                            · LastTimeUpload
                        </span>
                    </div>
                    <Button outline className={cx('btn-Follow')}>
                        Follow
                    </Button>
                </div>
                <div className={cx('title-me-profile')}>
                    <p className={cx('title-main')}>
                        Title Title Title Title{' '}
                        <span className={cx('hastag-main')}>
                            #hastag #hastag #hastag #hastag
                        </span>
                    </p>
                    <div className={cx('title-music')}>
                        {/* icon */} music title
                    </div>
                </div>
                <div className={cx('interact-profile-display')}>
                    <div className={cx('interact-profile')}>
                        <div className={cx('reaction')}>
                            <Button noneBtn className={cx('reaction-heart')}>
                                icon tim
                            </Button>
                            <span className={cx('count-number')}>1234</span>
                            <Button noneBtn className={cx('reaction-comment')}>
                                icon doc
                            </Button>
                            <span className={cx('count-number')}>1234</span>
                            <div className={cx('share')}>
                                icon 1 icon 2 icon 3 icon 4
                            </div>
                        </div>
                        <div className={cx('href-share-item')}>
                            <div className={cx('href')}>LinkHere</div>
                            <Button className={cx('btn-copy')} text>
                                Copy Link
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={cx('commented-item-display')}>
                    {/* using map */}
                    <div className={cx('commented-item-display2')}>
                        {/* button hide report */}
                        <div className={cx('commented-item')}>
                            <img
                                className={cx('avatar-user-comment')}
                                src={images.avatar2}
                                alt={images.NoImage}
                            ></img>
                            <div className={cx('user-item')}>
                                <span className={cx('name-user')}>
                                    Yourname ·{' '}
                                </span>
                                <span className={cx('creator-user')}>
                                    Creator
                                </span>
                                <br></br>
                                <span className={cx('comment-user')}>
                                    comment
                                    14239487892349802374907230984790237489
                                </span>
                                <br></br>
                                <div className={cx('reply-item-user')}>
                                    <span className={cx('time-upload-after')}>
                                        23h ago
                                    </span>
                                    <span className={cx('reply-another-user')}>
                                        Reply
                                    </span>
                                    <div className={cx('view-more-replies')}>
                                        View more replies (27)
                                    </div>
                                </div>
                            </div>
                            <div className={cx('commented-react-heart')}>
                                Heart
                                <p className={cx('number-react-heart')}>40</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={cx('comment-input-item-display')}>
                    <div className={cx('comment-input-item')}>
                        <input
                            type={'text'}
                            placeholder={'Add comment...'}
                            className={cx('comment-input')}
                        ></input>
                        {/* icon @ */}
                        {/* icon emotion */}
                        <Button
                            primary
                            className={cx('btn-submit-comment')}
                        >Post</Button>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default DetailVideo;
