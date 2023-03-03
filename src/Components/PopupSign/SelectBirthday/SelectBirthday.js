import classNames from 'classnames/bind';
import Style from './SelectBirthday.module.scss';
import Select from 'react-select';
import Days from './Json/Days.json';
import Months from './Json/Months.json';
import Years from './Json/Years.json';

const cx = classNames.bind(Style);

function SelectBirthday() {
    return (
        <span className={cx('wrapper')}>
            <Select className={cx('days')} options={Days}></Select>
            <Select className={cx('months')} options={Months}></Select>
            <Select className={cx('years')} options={Years}></Select>
        </span>
    );
}

export default SelectBirthday;
