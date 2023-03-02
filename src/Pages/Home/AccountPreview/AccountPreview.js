import classNames from 'classnames/bind';
import images from '~/assets/images';
import Images from '~/Components/Image';
import Button from '~/Components/Button';
import Style from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AccountPreview({ data }) {

    const cx = classNames.bind(Style);
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Images
                    className={cx('avatar')}
                    src={data.avatar}
                    alt={images.NoImage}
                ></Images>
                <div className={cx('btn-follow')}>
                    <Button primary>Follow</Button>
                </div>
            </header>

            <div className={cx('item-info')}>
                <span className={cx('nickname')}>
                    {`${data.first_name} ${data.last_name}`}
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        ></FontAwesomeIcon>
                    )}
                </span>
                <br></br>
                <span className={cx('name')}>{data.nickname}</span>
                <p className={cx('analytics')}>
                    <span className={cx('following-number')}>
                        {data.followers_count}
                    </span>
                    <span className={cx('following')}>Followers</span>
                    <span className={cx('Like-number')}>
                        {data.likes_count}
                    </span>
                    <span className={cx('Like')}>Likes</span>
                </p>
                <hr className={cx('hr-item')}></hr>
                <p className={cx('bio-item')}>{data.bio===null ? 'Người này quá đẹp trai/xinh gái nên không có Bio =))' : data.bio}</p>
            </div>
        </div>
    );
}

export default AccountPreview;
