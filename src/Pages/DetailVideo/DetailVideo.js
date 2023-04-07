import classNames from 'classnames/bind';
import Style from './DetailVideo.module.scss';

import images from '~/assets/images';
import Button from '~/Components/Button';
import {
    Embed,
    EmotionDetail,
    FacebokIcon,
    HeartNone,
    ShareBlack,
    ShareTo,
    Twitter,
    WhatsApp,
} from '~/Components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleCheck,
    faCommentDots,
    faHeart,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import MenuShareLite from '~/Components/MenuShareLite';
import Attag from '~/assets/images/Logo/AtTag.svg';
import ControlVideo from './ControlVideo';

function DetailVideo() {
    const cx = classNames.bind(Style);

    //get href
    const currentHref = window.location.href;

    return (
        <body className={cx('wrapper')}>
            {/* controlVideo */}
            <ControlVideo></ControlVideo>
            {/* interact item */}
            <div className={cx('interact-item')}>
                <div className={cx('me-profile')}>
                    <img
                        className={cx('avatar-me-profile')}
                        src={images.avatar1}
                        alt={images.NoImage}
                    ></img>
                    <div className={cx('detail-me-profile')}>
                        <span className={cx('name-me-profile')}>YourName</span>
                        <FontAwesomeIcon
                            icon={faCircleCheck}
                            style={{
                                color: '#20d5ec',
                                width: '14px',
                                height: '14px',
                            }}
                        ></FontAwesomeIcon>
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
                            <span className={cx('reaction-heart')}>
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    style={{ width: '20px', height: '20px' }}
                                ></FontAwesomeIcon>
                            </span>
                            <span className={cx('count-number')}>1234</span>
                            <span className={cx('reaction-comment')}>
                                <FontAwesomeIcon
                                    icon={faCommentDots}
                                    style={{ width: '20px', height: '20px' }}
                                ></FontAwesomeIcon>
                            </span>
                            <span className={cx('count-number')}>1234</span>
                            <div className={cx('share')}>
                                <Tippy content={'Embed'}>
                                    <div className={cx('icon-share')}>
                                        <Embed
                                            width={'24px'}
                                            height={'24px'}
                                        ></Embed>
                                    </div>
                                </Tippy>
                                <Tippy content={'Send to friend'}>
                                    <div className={cx('icon-share')}>
                                        <ShareTo
                                            width={'24px'}
                                            height={'24px'}
                                        ></ShareTo>
                                    </div>
                                </Tippy>
                                <Tippy content={'Share to Facebook'}>
                                    <div className={cx('icon-share')}>
                                        <FacebokIcon
                                            width={'24px'}
                                            height={'24px'}
                                        ></FacebokIcon>
                                    </div>
                                </Tippy>
                                <Tippy content={'Share to WhatsApp'}>
                                    <div className={cx('icon-share')}>
                                        <WhatsApp
                                            width={'24px'}
                                            height={'24px'}
                                        ></WhatsApp>
                                    </div>
                                </Tippy>
                                <Tippy content={'Share to Twitter'}>
                                    <div className={cx('icon-share')}>
                                        <Twitter
                                            width={'24px'}
                                            height={'24px'}
                                        ></Twitter>
                                    </div>
                                </Tippy>
                                <MenuShareLite
                                    icon={
                                        <>
                                            <div
                                                className={cx('icon-share')}
                                                style={{ marginTop: '3px' }}
                                            >
                                                <ShareBlack
                                                    width={'16px'}
                                                    height={'16px'}
                                                ></ShareBlack>
                                            </div>
                                        </>
                                    }
                                ></MenuShareLite>
                            </div>
                        </div>
                        <div className={cx('href-share-item')}>
                            <div className={cx('href')}>{currentHref}</div>
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
                                    Yourname{' '}
                                </span>
                                <span className={cx('creator-user')}>
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        style={{
                                            color: '#20d5ec',
                                            width: '14px',
                                            height: '14px',
                                        }}
                                    ></FontAwesomeIcon>{' '}
                                    <span style={{ color: 'black' }}>·</span>{' '}
                                    <span
                                        style={{
                                            color: ' rgb(254, 44, 85)',
                                            fontWeight: '700',
                                        }}
                                    >
                                        Creator
                                    </span>
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
                                <HeartNone
                                    width={'20px'}
                                    height={'20px'}
                                ></HeartNone>
                                <span className={cx('number-react-heart')}>
                                    40
                                </span>
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
                        <span className={cx('area-react')}>
                            <img
                                src={Attag}
                                alt=""
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer',
                                    marginRight: '10px',
                                    marginTop: '-2px',
                                }}
                            ></img>
                            <span style={{ cursor: 'pointer' }}>
                                <EmotionDetail
                                    width={'20px'}
                                    height={'20px'}
                                ></EmotionDetail>
                            </span>
                        </span>
                        <span className={cx('btn-submit-comment')}>
                            <button
                                style={{
                                    color: 'rgb(254, 44, 85)',
                                    fontWeight: '700',
                                    cursor: 'pointer',
                                }}
                            >
                                Post
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default DetailVideo;
