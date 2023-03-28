import Style from './GetApp.module.scss';
import classNames from 'classnames/bind';
import Menu from '~/Pages/Home/Menu/Menu';
import { Computer, MobilePhone } from '~/Components/Icons';

const APP = [
    {
        icon: <Computer />,
        title: 'Get TikTok for desktop',
    },
    {
        icon: <MobilePhone />,
        title: 'Get TikTok App',
    },
];

function GetApp() {
    const cx = classNames.bind(Style);
    return (
        <div className={cx('app-item')}>
            <Menu items={APP}>
                <button className={cx('getApp-btn')}>Get app</button>
            </Menu>
        </div>
    );
}

export default GetApp;
