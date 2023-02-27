import classNames from 'classnames/bind';
import Button from '../Button';
import Style from './Discover.module.scss';

function Tag({title, icon}) {
    const cx = classNames.bind(Style);

    return (
        <div className={cx('wrapper-tag')}>
            <Button text className={cx("btn-tag")}>
                <span className={cx("icon-tag")}>{icon}</span >
                <span className={cx("name-tag")}>{title}</span>
            </Button>
        </div>
    );
}

export default Tag;
