import Style from './Profiles.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import GetApp from '~/Components/GetApp';
import Button from '~/Components/Button';
import { useState } from 'react';

function Profile() {
    const cx = classNames.bind(Style);

    const [changeTab, setChangeTab] = useState('translateX(0px)');
    const [noClick, setNoClick] = useState('tab-noClick');
    const [Click, setClick] = useState('tab-Click');
    const [line1, setLine1] = useState('Upload your first video');
    const [line2, setLine2] = useState('Your videos will appear here');

    const [isHovering, setIsHovering] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);


    const handleNoClick = () => {
        setChangeTab('translateX(0px)');
        setNoClick('tab-noClick');
        setClick('tab-Click');
        setLine1('Upload your first video');
        setLine2('Your videos will appear here');
    };

    const handleClick = () => {
        setChangeTab('translateX(230px)');
        setNoClick('tab-Click');
        setClick('tab-noClick');
        setLine1('No liked videos yet');
        setLine2('Videos you liked will appear here');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('profile-item')}>
                <img className={cx('avatar')} src={images.avatar1} alt=""></img>
                <div className={cx('title-container')}>
                    <h1 className={cx('name')}>Profile Page - Name</h1>
                    <h3 className={cx('nickname')}>Nickname</h3>
                    <div className={cx('outline-editProfile')}>
                        <Button text className={cx('btn-editProfile')}>
                            EditProfile
                        </Button>
                    </div>
                </div>
                <br></br>
                <div className={cx('btn-share')}>Share</div>
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
                        onMouseOver={() => setIsHovering(true)}
                        onMouseOut={() => setIsHovering(false)}
                    >
                        Videos
                    </p>
                    <p
                        className={cx(noClick)}
                        onClick={handleClick}
                        onMouseOver={() => setIsHovering2(false)}
                        onMouseOut={() => setIsHovering2(true)}
                    >
                        Liked
                    </p>
                </div>
                <div
                    className={cx('transform-animation')}
                    style={{
                        transform: (!isHovering & isHovering2) && changeTab ,
                    }}
                ></div>
                <main className={cx('videos-item')}>
                    <div className={cx('obtainer')}>
                        {/* icon here */}
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
