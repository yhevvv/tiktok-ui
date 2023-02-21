import Style from './Menu.module.scss';
import { Wrapper as PropperWrapper } from '~/Components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(Style);

const defaultFn = () => {

}

function Menu({ children, items = [], onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1] //lay phan tu cuoi

    //menu list nhieu cap
    //important UI header Tiktok #5
    const renderItem = () => {
        return current.data.map((items, index) => {
            const isParent = !!items.children //!! chuyen dang boolean
            return <MenuItem key={index} data={items} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, items.children]);
                }
                else (
                    onChange(items)
                )
            }}></MenuItem>
        })
    }

    return (
        <Tippy
            delay={[0, 700]}
            //visible
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PropperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title='Language' onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }}></Header>}
                        {renderItem()}

                    </PropperWrapper>
                </div>
            )}

            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
