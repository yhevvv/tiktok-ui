import Style from './Discover.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

function Discover({ children }) {
    const cx = classNames.bind(Style);

    return (
        <div className={cx('wrapper-discover')}>
            <span className={cx('title')}>Discover</span>
            <div>{children}</div>
        </div>
    );
}

Discover.propTypes = {
    children: PropTypes.array,
};

export default Discover;
