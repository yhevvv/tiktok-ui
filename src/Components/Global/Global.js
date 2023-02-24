import Style from './GlobalStyle.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

function GlobalStyles({ children, Theme }) {
    const cx = classNames.bind(Style);

    return <div className={cx(`${Theme}`)}>{children}</div>;
}

GlobalStyles.propTypes = {
    children: PropTypes.node,
    Theme: PropTypes.string,
};

export default GlobalStyles;
