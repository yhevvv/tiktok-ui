import Style from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AccountItem() {

    const cx = classNames.bind(Style);
    return ( 
        <div className={cx('account-item')}>
            <img className={cx('avatar')} src={images.NoImage} alt=''></img>
            <div className={cx('item-info')}>
                    <span className={cx('nickname')}>
                        Pham Van A
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                    </span>
                    <p className={cx('name')}>Pham Van A</p>
            </div>
        </div>
     );
}


AccountItem.propTypes = {

};

export default AccountItem;
