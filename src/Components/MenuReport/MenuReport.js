import Style from './MenuReport.module.scss';
import classNames from 'classnames/bind';
import Menu from '../Popper/Menu/Menu';
import { Stop, Flag, Send } from '../Icons';

const REPORT = [
    {
        icon: <Send></Send>,
        title: 'Send message',
    },
    {
        icon: <Flag></Flag>,
        title: 'Report',
    },
    {
        icon: <Stop></Stop>,
        title: 'Block',
    },
];

function MenuReport({ icon }) {
    const cx = classNames.bind(Style);

    return (
        <div className={cx('report-item')}>
            <Menu items={REPORT}>
                <button className={cx('menuShare-btn')}>{icon}</button>
            </Menu>
        </div>
    );
}

export default MenuReport;
