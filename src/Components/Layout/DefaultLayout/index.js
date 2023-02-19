import Header from '~/Components/Layout/Components/Header';
import Sidebar from './SideBar'
import Styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles)

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
