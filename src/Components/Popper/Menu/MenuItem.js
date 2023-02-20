import Button from '~/Components/Button';

import Style from './Menu.module.scss';
import classNames from 'classnames/bind';



const cx = classNames.bind(Style);

function MenuItem({ data, onClick }) {
    return (
        <Button className={cx('menu-item')} to={data.to} leftIcon={data.icon} switchButton={data.switch} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
