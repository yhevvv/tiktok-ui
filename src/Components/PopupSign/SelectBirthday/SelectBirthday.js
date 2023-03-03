import classNames from 'classnames/bind';
import Style from './SelectBirthday.module.scss';
import Select from 'react-select'
import Days from './Json/Days.json'
import Months from './Json/Months.json'
import Years from './Json/Years.json'


const cx = classNames.bind(Style);


function SelectBirthday() {

    return <div>
            <Select options={Days}></Select>
            <Select options={Months}></Select>
            <Select options={Years}></Select>

    </div>;
}

export default SelectBirthday;
