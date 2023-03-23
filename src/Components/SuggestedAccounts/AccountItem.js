import Style from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { Wrapper as PropperWrapper } from '~/Components/Popper';
import Images from '~/Components/Image';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from './AccountPreview';
import { Link } from 'react-router-dom';

function AccountItem({ data }) {
    const cx = classNames.bind(Style);

    const previews = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PropperWrapper>
                    <AccountPreview data={data} />
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
                offset={[0, -10]}
            >
                <Link to={`/@${data.nickname}`}>
                    <div className={cx('account-item')}>
                        <Images
                            className={cx('avatar')}
                            src={data.avatar}
                            alt={images.NoImage}
                        ></Images>
                        <div className={cx('item-info')}>
                            <span className={cx('nickname')}>
                                {data.first_name} {data.last_name}
                                {data.tick ? (
                                    <FontAwesomeIcon
                                        className={cx('check')}
                                        icon={faCheckCircle}
                                    ></FontAwesomeIcon>
                                ) : (
                                    <></>
                                )}
                            </span>
                            <p className={cx('name')}>{data.nickname}</p>
                        </div>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
