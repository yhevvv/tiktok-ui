import classNames from 'classnames/bind';

import Style from './IOSTouch.module.scss';

const cx = classNames.bind(Style);

function IOSTouch( {classMode} ) {
    return (
        <div className={cx('wrapper')}>
            <label className={cx('container')}>
                <input type="checkbox" className={cx('checkbox')}></input>
                <span className={cx('background')}></span>
                <span className={cx('mask')}></span>
            </label>
        </div>
    );
}

export default IOSTouch;
