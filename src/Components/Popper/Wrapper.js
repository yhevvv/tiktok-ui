import classNames from "classnames/bind";
import Style from './Popper.module.scss'

const cx = classNames.bind(Style)

function Wrapper({ children }) {
    return (
        <div className={cx('wrapper')}>
            {children}
        </div>
    );
}

export default Wrapper;