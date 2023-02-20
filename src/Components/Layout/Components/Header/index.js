import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircle,
    faCircleHalfStroke,
    faCircleQuestion,
    faCircleXmark,
    faEarthAmerica,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSignIn,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import ClassNames from 'classnames/bind'; ///them dau - khi dat ten classname

import Style from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/Components/AccountItem';
import Button from '~/Components/Button';
import { Wrapper as PropperWrapper } from '~/Components/Popper';
import { useEffect, useState } from 'react';

import 'tippy.js/dist/tippy.css';
import Menu from '~/Components/Popper/Menu/index';

const cx = ClassNames.bind(Style);

const MEMU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmerica}></FontAwesomeIcon>,
        title: 'English'
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and Help',
        to: '/feedback-and-help',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts'
    },
    {
        icon: <FontAwesomeIcon icon={faCircleHalfStroke}></FontAwesomeIcon>,
        title: 'Light mode',
        switch: true
    }
]

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok"></img>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive="true"
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PropperWrapper>
                                <span className={cx('search-title')}>
                                    Account
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </span>
                            </PropperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Search account and videos"
                            spellCheck={false}
                        ></input>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text>+ Upload</Button>
                    {/* <Button primary className={cx('custom-login')} leftIcon={<FontAwesomeIcon icon={faSignIn} />}>Log in</Button> */}
                    <Button primary className={cx('custom-login')}>
                        Log in
                    </Button>
                    <Menu
                        item = {MEMU_ITEM}
                    >
                        <button className={cx('menu-btn')}>
                            <FontAwesomeIcon
                                icon={faEllipsisVertical}
                            ></FontAwesomeIcon>
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
