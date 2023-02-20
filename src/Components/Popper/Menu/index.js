import Style from './Menu.module.scss';
import { Wrapper as PropperWrapper } from '~/Components/Popper';
import MenuItem from './MenuItem';

import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

const cx = classNames.bind(Style);

function Menu({ children, item = [] }) {

    const renderItem = () => {
        return item.map((item, index) => (
            <MenuItem key={index} data = {item}/>
        ))
    }

    return (
        <Tippy 
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PropperWrapper className={cx('menu-popper')}>
                        {renderItem()}
                    </PropperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
