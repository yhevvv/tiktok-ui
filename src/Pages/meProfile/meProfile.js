import Style from './meProfile.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import GetApp from '~/Components/GetApp';
import Button from '~/Components/Button';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Share, Write, Lock, UserIconLager } from '~/Components/Icons';

function Profile() {
    const cx = classNames.bind(Style);

    const [noClick, setNoClick] = useState('tab-noClick');
    const [Click, setClick] = useState('tab-Click');
    const [line1, setLine1] = useState('Upload your first video');
    const [line2, setLine2] = useState('Your videos will appear here');

    const [isHovering, setIsHovering] = useState(0);

    const handleNoClick = () => {
        setNoClick('tab-noClick');
        setClick('tab-Click');
        setLine1('Upload your first video');
        setLine2('Your videos will appear here');
    };

    const handleClick = () => {
        setNoClick('tab-Click');
        setClick('tab-noClick');
        setLine1('No liked videos yet');
        setLine2('Videos you liked will appear here');
    };

    const onMouseLiked = () => {
        if (noClick === 'tab-Click') {
            setIsHovering(230);
        } else {
            setIsHovering(0);
        }
    };

    const onMouseVideos = () => {
        if (Click === 'tab-Click') {
            setIsHovering(0);
        } else {
            setIsHovering(230);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('profile-item')}>
                <img className={cx('avatar')} src={images.avatar1} alt=""></img>
                <div className={cx('title-container')}>
                    <h1 className={cx('name')}>meProfile Page - Name</h1>
                    <h3 className={cx('nickname')}>Nickname</h3>
                    <div className={cx('outline-editProfile')}>
                        <Button text className={cx('btn-editProfile')}>
                            <Write></Write>{' '}
                            <strong className={cx('btn-text')}>Edit profile</strong>
                        </Button>
                    </div>
                </div>
                <br></br>
                <div className={cx('btn-share')}>
                    <Share></Share>
                </div>
            </div>
            <h2 className={cx('statistical')}>
                <div className={cx('statistical-item')}>
                    <strong className={cx('number-following')}>1</strong>
                    <span className={cx('following')}>Following</span>
                </div>
                <div className={cx('statistical-item')}>
                    <strong className={cx('number-followers')}>2</strong>
                    <span className={cx('followers')}>Followers</span>
                </div>
                <div className={cx('statistical-item')}>
                    <strong className={cx('number-like')}>0</strong>
                    <span className={cx('like')}>likes</span>
                </div>
            </h2>
            <h2 className={cx('bio')}>Bio is here</h2>
            <div className={cx('videos-user')}>
                <div className={cx('tab')}>
                    <p
                        className={cx(Click)}
                        onClick={handleNoClick}
                        onMouseOver={() => setIsHovering(0)}
                        onMouseOut={onMouseVideos}
                    >
                        Videos
                    </p>
                    <p
                        className={cx(noClick)}
                        onClick={handleClick}
                        onMouseOver={() => setIsHovering(230)}
                        onMouseOut={onMouseLiked}
                    >
                        <Lock></Lock>Liked
                    </p>
                </div>
                <motion.div
                    className={cx('transform-animation')}
                    animate={{ x: isHovering }}
                ></motion.div>
                <main className={cx('videos-item')}>
                    <div className={cx('obtainer')}>
                        {/* icon here */}
                        <p>
                            <UserIconLager
                                width={'9rem'}
                                height={'9rem'}
                            ></UserIconLager>
                        </p>
                        <p className={cx('line-1')}>{line1}</p>
                        <p className={cx('line-2')}>{line2}</p>
                    </div>
                </main>
            </div>
            <GetApp></GetApp>
        </div>
    );
}

export default Profile;
