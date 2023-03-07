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
import { useState, useContext, useLayoutEffect } from 'react';
import Cookies from 'js-cookie';

import Style from './HeaderFull.module.scss';
import Button from '~/Components/Button';
import Menu from '~/Components/Popper/Menu/Menu';
import {
    IconCreateEffect,
    IconMessage,
    IconNotification,
} from '~/Components/Icons';
//image from asset
import images from '~/assets/images';
//Image from component
import ImageC from '~/Components/Image';
import Search from '~/Layouts/Components/Search';
import Config from '~/Config';
import { dataContext } from '~/Components/PopupSign/dataContext';
import dataLanguage from '~/Layouts/Components/Header/dataLanguage.json';

import 'tippy.js/dist/tippy.css';
import PopupSign from '../../../Components/PopupSign';

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmerica}></FontAwesomeIcon>,
        title: 'Language',
        children: {
            title: 'language',
            data: dataLanguage,
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
            data: dataLanguage,
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
        to: null,
        separate: true,
    },
];

function Header() {
    const [isCheckUser, setisCheckUser] = useState(null);

    const dataArray = useContext(dataContext);

    useLayoutEffect(() => {
        if (dataContext !== []) {
            setisCheckUser(dataArray);
        }
        const dataCookie = Cookies.get('dataUser');
        if (dataCookie) {
            try {
                const parsedData = JSON.parse(dataCookie);
                setisCheckUser(parsedData);
            } catch (error) {
                console.error('Error parsing JSON:', error);
                setTimeout(2500);
                window.location.reload();
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const currentUser = isCheckUser === null ? false : true;

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

    const wrapperClass = cx('wrapper');

    return (
        <header className={wrapperClass}>
            <div className={cx('inner')}>
                <Link to={Config.routes.root}>
                    <img src={images.logo} alt="TikTok"></img>
                </Link>
                <Search></Search>
                <div className={cx('action')}>
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
                            <Menu items={USER_MENU} onChange={handleMenuChange}>
                                <ImageC
                                    className={cx('user-avatar')}
                                    alt="User"
                                    src={isCheckUser?.data?.avatar}
                                ></ImageC>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <PopupSign title={'+ Upload'}></PopupSign>
                            <PopupSign title={'Log in'}></PopupSign>
                            <Menu items={MENU_ITEM} onChange={handleMenuChange}>
                                <button className={cx('menu-btn')}>
                                    <FontAwesomeIcon
                                        icon={faEllipsisVertical}
                                    ></FontAwesomeIcon>
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
