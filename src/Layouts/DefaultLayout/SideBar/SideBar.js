import ClassNames from "classnames/bind";
import Style from './Sidebar.module.scss'

function Sidebar() {

    const cx = ClassNames.bind(Style)

    return (
        <aside className={cx('wrapper')}>
            <h1>Slide bar</h1>
        </aside>
    );
}

export default Sidebar;