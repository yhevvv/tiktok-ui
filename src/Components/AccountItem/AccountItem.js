import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Style from './AccountItem.module.scss';
import Image from '../Image';
import images from '~/assets/images';
import Cookies from 'js-cookie';

function AccountItem({ data }) {
    const cx = classNames.bind(Style);

    const handleClick = () => {
        Cookies.set('DataNickName', data.nickname);
        setTimeout(() => {
            // eslint-disable-next-line no-restricted-globals
            location.reload();
        }, 100);
    };
    return (
        <Link to={`/@${data.nickname}`} onClick={handleClick}>
            <div className={cx('wrapper')}>
                <Image
                    src={data.avatar}
                    className={cx('avatar')}
                    alt={images.NoImage}
                ></Image>
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{data.full_name}</span>
                        {data.tick && (
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className={cx('iconCheck')}
                            ></FontAwesomeIcon>
                        )}
                        <div className={cx('id')}>{data.nickname}</div>
                    </h4>
                    <span className={cx('aaa')}></span>
                </div>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
