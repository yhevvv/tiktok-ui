import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faCircleHalfStroke,
    faCircleQuestion,
    faCoins,
    faEarthAmerica,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faUser,
    faVideo,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import ClassNames from 'classnames/bind'; ///them dau - khi dat ten classname
import { Link } from 'react-router-dom';

import Style from './Header.module.scss';
import Button from '~/Components/Button';
import Menu from '~/Components/Popper/Menu/index';
import {
    IconCreateEffect,
    IconMessage,
    IconNotification,
} from '~/Components/Icons';
//image from asset
import images from '~/assets/images';
//Image from component
import ImageC from '~/Components/Image';
import Search from '~/Components/Layout/Components/Search';
import routesConfig from '~/Config/routes'


import 'tippy.js/dist/tippy.css';

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
            ],
        },
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
];

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
            ],
        },
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
        icon: (
            <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
        ),
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;

            default:
                break;
        }
    };

    const cx = ClassNames.bind(Style);

    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.root}>
                    <img src={images.logo} alt="TikTok"></img>
                </Link>

                <Search></Search>

                <div className={cx('action')}>
                    {/* dang nhap hoac guest */}
                    {currentUser ? (
                        <>
                            <Button text>+ Upload</Button>
                            <Tippy
                                delay={[0, 100]}
                                offset={[12, 8]}
                                content="Create Effect"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <IconCreateEffect></IconCreateEffect>
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 100]}
                                offset={[12, 8]}
                                content="Upload Video"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <sup className={cx('notificationAlert')}>
                                        1
                                    </sup>
                                    <IconMessage></IconMessage>
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 100]}
                                offset={[12, 8]}
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <sup className={cx('notificationAlert')}>
                                        30
                                    </sup>
                                    <IconNotification></IconNotification>
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
                            <ImageC
                                className={cx('user-avatar')}
                                alt="User"              
                                //src=''
                                src={images.avatar1}
                                // fallback= {images.avatar2}
                            ></ImageC>
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
