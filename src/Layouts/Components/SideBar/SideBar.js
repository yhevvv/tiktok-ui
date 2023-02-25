import classNames from 'classnames/bind';
import config from '~/Config';
import Style from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupIcon, LiveIcon, HomeIconActive, UserGroupIconActive, LiveIconActive } from '~/Components/Icons';

function Sidebar() {
    const cx = classNames.bind(Style);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem 
                    title="For You"
                    to={config.routes.root}
                    icon={<HomeIcon />}
                    activeIcon={<HomeIconActive></HomeIconActive>}
                ></MenuItem>
                <MenuItem 
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon = {<UserGroupIconActive></UserGroupIconActive>}
                ></MenuItem>
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon = {<LiveIconActive></LiveIconActive>}
                ></MenuItem>
            </Menu>
            <hr className={cx('hr-item')}></hr>
        </aside>
    );
}

export default Sidebar;
