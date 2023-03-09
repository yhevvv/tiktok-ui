import Style from './MenuShare.module.scss';
import classNames from 'classnames/bind';
import Menu from '../Popper/Menu/Menu';
import { Embed, FacebokIcon, WhatsApp, Twitter, CopyLink, Linkedln, Reddit, Telegram, Email, Line, Pinterest } from '../Icons';

const SHARE = [
    {
        icon: <Embed></Embed>,
        title: 'Embed',
    },
    {
        icon: <FacebokIcon width={'2.6rem'} height={'2.6rem'}></FacebokIcon>,
        title: 'Share to Facebook',
        to: 'https://www.facebook.com/',
    },
    {
        icon: <WhatsApp></WhatsApp>,
        title: 'Share to WhatsApp',
        to: 'https://api.whatsapp.com/',
    },
    {
        icon: <Twitter></Twitter>,
        title: 'Share to Twitter',
    },
    {
        icon: <CopyLink></CopyLink>,
        title: 'Copy link',
        copy: '/:nickname',
    },
    {
        icon: <Linkedln></Linkedln>,
        title: 'Share to Linkedln',
    },
    {
        icon: <Reddit></Reddit>,
        title: 'Share to Reddit',
        to: 'https://www.reddit.com/',
    },
    {
        icon: <Telegram></Telegram>,
        title: 'Share to Telegram',
    },
    {
        icon: <Email></Email>,
        title: 'Share to Email',
    },
    {
        icon: <Line></Line>,
        title: 'Share to Line',
    },
    {
        icon: <Pinterest></Pinterest>,
        title: 'Share to Pinterest',
    },
];

function MenuShare({ icon }) {
    const cx = classNames.bind(Style);

    return (
        <div className={cx('share-item')}>
            <Menu items={SHARE} classBody={'menu-share'}>
                <button className={cx('menuShare-btn')}>{icon}</button>
            </Menu>
        </div>
    );
}

export default MenuShare;
