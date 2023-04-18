import classNames from 'classnames/bind';
import Style from './404.module.scss';

function NotFound() {
    const cx = classNames.bind(Style);

    return (
        <div className={cx('not-found')}>
            <h1 className={cx('h1')}>404 Page Not Found</h1>
            <p className={cx('p')}>
                We're sorry, the page you requested could not be found.
            </p>
        </div>
    );
}

export default NotFound;
