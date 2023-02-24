import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Style from './Button.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import IOSTouch from '~/Components/Button/IOSTouch';

const cx = classNames.bind(Style);

function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    onClick,
    small = false,
    Large = false,
    text = false,
    disable = false,
    rounded = false,
    className,
    leftIcon,
    rightIcon,
    switchButton,
    ...passProps
}) {
    const [isDarkMode, setIsDarkMode] = useState('light');

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const classMode = isDarkMode ? 'light' : 'dark';

    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    //remove event listener when button is disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                console.log(key);
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary, //button style 1
        outline, //button style 2
        text, //button style 3
        rounded, //button style 4
        small, //size small button
        Large, //size big button
        [className]: className,
        disable,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {switchButton && (
                <IOSTouch
                    classMode={classMode}
                    onChange={toggleDarkMode}
                ></IOSTouch>
            )}
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    onClick: PropTypes.func,
    small: PropTypes.bool,
    Large: PropTypes.bool,
    text: PropTypes.bool,
    disable: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    switchButton: PropTypes.bool,
};

export default Button;
