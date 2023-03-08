import Styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import HeaderFull from '../Components/HeaderFull';
import SideBarFull from '../Components/SideBarFull';

const cx = classNames.bind(Styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderFull></HeaderFull>
            <div className={cx('container')}>
                <SideBarFull></SideBarFull>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
