import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react'
import { Wrapper as PropperWrapper } from '~/Components/Popper'

import Style from './Header.module.scss';
import ClassNames from 'classnames/bind'; ///them dau - khi dat ten classname
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import AccountItem from '~/Components/AccountItem'

import 'tippy.js/dist/tippy.css';


const cx = ClassNames.bind(Style);

function Header() {

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0);
    }, [])

    //20:49

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt='TikTok'></img>
                <Tippy visible={searchResult.length > 0} interactive='true' render={attrs => (
                    <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                        <PropperWrapper>
                            <span className={cx('search-title')}>
                                Account
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </span>
                        </PropperWrapper>
                    </div>
                )}>
                    <div className={cx('search')}>
                        <input placeholder='Search account and videos' spellCheck={false}></input>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy >
                <div className={cx('action')}>

                </div>
            </div>

        </header>
    );
}

export default Header;
