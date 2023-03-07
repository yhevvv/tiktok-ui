import Style from './Profiles.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import GetApp from '~/Components/GetApp';
import Button from '~/Components/Button';

function Profile() {
    const cx = classNames.bind(Style);
    return (
        <body className={cx('wrapper')}>
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
                        <span className={cx('like')}>like</span>
                    </div>
                </h2>
                <h2 className={cx('bio')}>Bio is here</h2>
                <div className={cx('btn-share')}>Share</div>
            </div>
            <div className={cx('videos-user')}>
                <p className={cx('tab-videos')}>Videos</p>
                <p className={cx('tab-like')}>Liked</p>
                <div className={cx('transform-animation')}></div>
                <main className={cx('videos-item')}>
                    <div className={cx('obtainer')}>
                        {/* icon here */}
                        <p className={cx('line-1')}>Upload your first video</p>
                        <p className={cx('line-2')}>
                            Your videos will appear here
                        </p>
                    </div>
                </main>
            </div>
            <GetApp></GetApp>
        </body>
    );
}

export default Profile;
