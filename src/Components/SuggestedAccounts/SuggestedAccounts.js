import Style from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

function SuggestedAccounts({ label, more, data = [], onClick }) {
    const cx = classNames.bind(Style);

    const ReloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            <div onClick={ReloadPage}>
                {data.map((account) => (
                    <AccountItem key={account.id} data={account}></AccountItem>
                ))}
            </div>
            <p className={cx('more-item')} onClick={onClick}>
                {more}
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
    more: PropTypes.string,
};

export default SuggestedAccounts;
