import Button from '~/Components/Button';

import Style from './Menu.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';


const cx = classNames.bind(Style);

function MenuItem({ data, onClick }) {

const classes = cx('menu-item', {
    separate: data.separate
})

    return (
        <Button className={classes} to={data.to} leftIcon={data.icon} switchButton={data.switch} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}

export default MenuItem;
