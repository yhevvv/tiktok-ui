import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import Style from './Menu.module.scss';

const cx = classNames.bind(Style);

function MenuItem({ title, to, icon, activeIcon }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        //chuyen active thanh dang thu vien cua classNames, NavLink khi duoc chon se duoc active va them
        <NavLink
            className={(nav) => cx('menu-item', { active: nav.isActive })}
            to={to}
        >
            <div className={cx('icon-item')}>
                {isActive ? activeIcon : icon}
            </div>
            <span className={cx('title-item')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.object,
};

export default MenuItem;
