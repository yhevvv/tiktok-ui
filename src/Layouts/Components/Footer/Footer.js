import classNames from 'classnames/bind';
import Style from './Footer.module.scss';
import LogoIcon from '~/assets/images/Logo/logoIcon.svg';
import LogoText from '~/assets/images/Logo/logoText.svg';
import { Link } from 'react-router-dom';

function Footer() {
    const cx = classNames.bind(Style);
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={LogoIcon} alt="" className={cx('LogoIcon')}></img>
                <img src={LogoText} alt="" className={cx('LogoText')}></img>
            </div>
            <div className={cx('company')}>
                <h4 className={cx('title')}>Company</h4>
                <Link to={'https://www.tiktok.com/about?lang=en'}>
                    <span className={cx('href')}>About</span>
                </Link>
                <Link to={'https://newsroom.tiktok.com/en-us'}>
                    <span className={cx('href')}>Newsroom</span>
                </Link>
                <Link to={'https://www.tiktok.com/about/contact?lang=en'}>
                    <span className={cx('href')}>Contact</span>
                </Link>
                <Link to={'https://careers.tiktok.com'}>
                    <span className={cx('href')}>Careers</span>
                </Link>
                <Link to={'https://www.bytedance.com'}>
                    <span className={cx('href')}>ByteDance</span>
                </Link>
            </div>
            <div className={cx('program')}>
                <h4 className={cx('title')}>Programs</h4>
                <Link to={'https://www.tiktok.com/forgood'}>
                    <span className={cx('href')}>Advertise</span>
                </Link>
                <Link
                    to={
                        'https://www.tiktok.com/business/vi?attr_source=tt_official_site&attr_medium=tt_official_site_guidance&refer=tiktok_web&tt4b_lang_redirect=1'
                    }
                >
                    <span className={cx('href')}>Developers</span>
                </Link>
                <Link to={'https://developers.tiktok.com/?refer=tiktok_web'}>
                    <span className={cx('href')}>TikTok Rewards</span>
                </Link>
                <Link to={'https://www.tiktok.com/browse'}>
                    <span className={cx('href')}>TikTok Browse</span>
                </Link>
                <Link to={'https://www.tiktok.com/embed'}>
                    <span className={cx('href')}>TikTok Embeds</span>
                </Link>
            </div>
            <div className={cx('support')}>
                <h4 className={cx('title')}>Support</h4>
                <Link to={'https://support.tiktok.com/en'}>
                    <span className={cx('href')}>Help Center</span>
                </Link>
                <Link to={'https://www.tiktok.com/safety/en'}>
                    <span className={cx('href')}>Safety Center</span>
                </Link>
                <Link
                    to={'https://www.tiktok.com/creators/creator-portal/en-us'}
                >
                    <span className={cx('href')}>Creator Portal</span>
                </Link>
                <Link
                    to={'https://www.tiktok.com/community-guidelines?lang=en'}
                >
                    <span className={cx('href')}>Community Guidelines</span>
                </Link>
                <Link to={'https://www.tiktok.com/transparency/en'}>
                    <span className={cx('href')}>Transparency</span>
                </Link>
                <Link to={'https://www.tiktok.com/accessibility'}>
                    <span className={cx('href')}>Accessibility</span>
                </Link>
            </div>
            <div className={cx('legal')}>
                <h4 className={cx('title')}>Legal</h4>
                <Link
                    to={
                        'https://www.tiktok.com/legal/page/row/terms-of-service/en'
                    }
                >
                    <span className={cx('href')}>Terms of Use</span>
                </Link>
                <Link
                    to={
                        'https://www.tiktok.com/legal/page/row/privacy-policy/en'
                    }
                >
                    <span className={cx('href')}>Privacy Policy</span>
                </Link>
            </div>
            <div className={cx('endFooter')}>
                <div className={cx('language')}>
                    <select
                        style={{
                            width: '170px',
                            height: '34px',
                            backgroundColor: 'black',
                            color: 'white',
                        }}
                    >
                        <option>English</option>
                        <option>Vietnamese</option>
                        <option>Argentina</option>
                        <option>Brazil</option>
                        <option>Canada</option>
                        <option>Denmark</option>
                        <option>Egypt</option>
                        <option>France</option>
                        <option>Germany</option>
                        <option>India</option>
                        <option>Japan</option>
                        <option>Kenya</option>
                    </select>
                </div>
                <div className={cx('copyright')}>
                    <span>© 2023 TikTok</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
