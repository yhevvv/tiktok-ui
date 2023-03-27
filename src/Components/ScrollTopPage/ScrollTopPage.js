import Button from '../Button';
import classNames from 'classnames/bind';
import Style from './ScrollTopPage.module.scss';
import { ScrollTop } from '../Icons';
import { animateScroll } from 'react-scroll';

function ScrollTopPage() {
    const cx = classNames.bind(Style);

    const handleScrollTop = () => {
        animateScroll.scrollToTop(0);
    };

    return (
        <div className={cx('wrapper')}>
            <Button primary className={cx('button')} onClick={handleScrollTop}>
                <ScrollTop></ScrollTop>
            </Button>
        </div>
    );
}

export default ScrollTopPage;
