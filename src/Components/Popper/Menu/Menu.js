import Style from './Menu.module.scss';
import { Wrapper as PropperWrapper } from '~/Components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import * as logoutService from '~/Service/logoutService';
import { TriangleDown } from '~/Components/Icons';

const cx = classNames.bind(Style);

const defaultFn = () => {};

function Menu({
    children,
    items = [],
    hideOnClick = false,
    onChange = defaultFn,
    classBody,
}) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]; //lay phan tu cuoi
    const [more, setMore] = useState('');

    const HandleLogin = () => {
        const isToken = Cookies.get('isToken');
        logoutService.logout({ token: isToken });
    };

    const moreHandle = () => {
        setMore('menu-share-more');
    };

    //menu list nhieu cap
    //important UI header Tiktok #5
    const renderItem = () => {
        return current.data.map((items, index) => {
            const isParent = !!items.children; //!! chuyen dang boolean
            const logicLogOut = !!items.separate;

            return (
                <MenuItem
                    key={index}
                    data={items}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, items.children]);
                        } else onChange(items);
                        if (logicLogOut) {
                            Cookies.set('dataUser', null);
                            HandleLogin();
                            Cookies.set('isToken', null);
                            setTimeout(() => {
                                // eslint-disable-next-line no-restricted-globals
                                location.reload();
                            }, 2000);
                        } else onChange(items);
                    }}
                ></MenuItem>
            );
        });
    };

    const handleResetToFirstPage = () => {
        setHistory((prev) => prev.slice(0, 1));
        setMore('');
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    return (
        <Tippy
            delay={[0, 700]}
            //visible
            placement="bottom-end"
            interactive
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PropperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={handleBack}
                            ></Header>
                        )}
                        {classBody ? (
                            <div>
                                <div className={cx(more || classBody)}>
                                    {renderItem()}
                                </div>
                                <span
                                    className={cx('icon-more-share')}
                                    onClick={moreHandle}
                                >
                                    {more ? (
                                        <></>
                                    ) : (
                                        <TriangleDown></TriangleDown>
                                    )}
                                </span>
                            </div>
                        ) : (
                            <div className={cx('menu-body')}>
                                {renderItem()}
                            </div>
                        )}
                    </PropperWrapper>
                </div>
            )}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
