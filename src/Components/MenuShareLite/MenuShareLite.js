import Style from './MenuShareLite.module.scss';
import classNames from 'classnames/bind';
import Menu from '../Popper/Menu/Menu';
import { Linkedln, Reddit, Telegram, Email, Line, Pinterest } from '../Icons';

const SHARE = [
    {
        icon: <Linkedln width={'26px'} height={'26px'}></Linkedln>,
        title: 'Share to Linkedln',
    },
    {
        icon: <Reddit width={'26px'} height={'26px'}></Reddit>,
        title: 'Share to Reddit',
        to: 'https://www.reddit.com/',
    },
    {
        icon: <Telegram width={'26px'} height={'26px'}></Telegram>,
        title: 'Share to Telegram',
    },
    {
        icon: <Email width={'26px'} height={'26px'}></Email>,
        title: 'Share to Email',
    },
    {
        icon: <Line width={'26px'} height={'26px'}></Line>,
        title: 'Share to Line',
    },
    {
        icon: <Pinterest width={'26px'} height={'26px'}></Pinterest>,
        title: 'Share to Pinterest',
    },
];

function MenuShareLite({ icon }) {
    const cx = classNames.bind(Style);

    return (
        <div className={cx('share-item')}>
            <Menu items={SHARE}>
                <button className={cx('menuShare-btn')}>{icon}</button>
            </Menu>
        </div>
    );
}

export default MenuShareLite;
