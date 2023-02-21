import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faCircleHalfStroke,
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faEarthAmerica,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faSpinner,
    faUser,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';

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
        title: 'Language',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'language',
                    code: 'cn',
                    title: 'China',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: 'Japan',
                },
            ]

        }
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
        title: 'Dark mode',
        switch: true
    }
]

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
        title: 'View profile',
        to: '/@id_123',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
        title: 'Get Coins',
        to: '/coin',

    },
    {
        icon: <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>,
        title: 'LIVE Studio',
        to: '/studio',

    },
    {
        icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
        title: 'Setting',
        to: '/Setting',

    },
    {
        icon: <FontAwesomeIcon icon={faEarthAmerica}></FontAwesomeIcon>,
        title: 'Language',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'language',
                    code: 'cn',
                    title: 'China',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: 'Japan',
                },
            ]

        }

    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and Help',
        to: '/feedback-and-help',

    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts',

    },
    {
        icon: <FontAwesomeIcon icon={faCircleHalfStroke}></FontAwesomeIcon>,
        title: 'Dark mode',
        switch: true,
    },
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },

]

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);


    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':

                break;

            default:
                break;
        }
    }

    const currentUser = true

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok"></img>
                <HeadlessTippy
                    delay={[0, 500]}
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
                </HeadlessTippy>

                <div className={cx('action')}>
                    {/* dang nhap hoac guest */}
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 700]} offset={[12, 8]} content='Upload Video' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                                </button>
                            </Tippy>
                        </>

                    ) : (

                        <>
                            <Button text>+ Upload</Button>
                            <Button primary className={cx('custom-login')}>
                                Log in
                            </Button>

                        </>

                    )}

                    <Menu
                        items={currentUser ? USER_MENU : MEMU_ITEM}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <img className={cx('user-avatar')} alt='User' src={images.avatar1}></img>
                        ) : (

                            <button className={cx('menu-btn')}>
                                <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                ></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
