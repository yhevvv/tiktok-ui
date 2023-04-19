import Style from './Profile.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';

function ProfileVideo({ data }) {
    console.log(data);

    const cx = classNames.bind(Style);
    return (
        <>
            <img
                className={cx('avatar-me-profile')}
                src={data?.user?.avatar}
                alt={images.NoImage}
            ></img>
            <div className={cx('detail-me-profile')}>
                <span className={cx('name-me-profile')}>
                    {data?.user?.first_name === '' &&
                    data?.user?.last_name === ''
                        ? 'undefined'
                        : data?.user?.first_name + ' ' + data?.user?.last_name}
                </span>
                {data?.user?.tick && (
                    <FontAwesomeIcon
                        icon={faCircleCheck}
                        style={{
                            color: '#20d5ec',
                            width: '14px',
                            height: '14px',
                        }}
                    ></FontAwesomeIcon>
                )}
                <br></br>
                <span className={cx('nickname-me-profile')}>
                    {data?.user?.nickname}
                </span>
                <span className={cx('time-me-profile')}>
                    {' '}
                    · {data?.published_at}
                </span>
            </div>
        </>
    );
}

export default memo(ProfileVideo);
