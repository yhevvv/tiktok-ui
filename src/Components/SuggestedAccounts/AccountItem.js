import Style from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { Wrapper as PropperWrapper } from '~/Components/Popper';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview';

function AccountItem() {
    const cx = classNames.bind(Style);

    const previews = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PropperWrapper>
                    <AccountPreview/>
                </PropperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                render={previews}
                interactive
                delay={[800, 800]}
                placement="bottom-start"
                offset= {[0, -10]}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src={images.NoImage}
                        alt=""
                    ></img>
                    <div className={cx('item-info')}>
                        <span className={cx('nickname')}>
                            Pham Van A
                            <FontAwesomeIcon
                                className={cx('check')}
                                icon={faCheckCircle}
                            ></FontAwesomeIcon>
                        </span>
                        <p className={cx('name')}>Pham Van A</p>
                        
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
