import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/Components/Button';
import Style from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AccountPreview() {
    const cx = classNames.bind(Style);
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} src={images.NoImage} alt=""></img>
                <div className={cx('btn-follow')}><Button primary>Follow</Button></div>
            </header>

            <div className={cx('item-info')}>
                <span className={cx('nickname')}>
                    Pham Van A
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    ></FontAwesomeIcon>
                </span>
                <br></br>
                <span className={cx('name')}>Pham Van A</span>
                <p className={cx('analytics')}>
                    <span className={cx('following-number')}>1M</span>
                    <span className={cx('following')}>Followers</span>
                    <span className={cx('Like-number')}>1M</span>
                    <span className={cx('Like')}>Likes</span>
                </p>
            </div>
        </div>
    );
}
export default AccountPreview;
