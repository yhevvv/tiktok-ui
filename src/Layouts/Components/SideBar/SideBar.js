import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames/bind';

import config from '~/Config';
import Style from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeIconActive,
    UserGroupIconActive,
    LiveIconActive,
} from '~/Components/Icons';
import SuggestedAccounts from '~/Components/SuggestedAccounts';
import * as userService from '~/Service/userService';


function Sidebar() {
    const cx = classNames.bind(Style);

    const INIT_PAGE = 1;
    const PER_PAGE = 5;

    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers, setSuggestUsers] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data) => {
                setSuggestUsers(prevUsers => [...prevUsers, ...data]); //lay du lieu cu va them du lieu
            })
            .catch((error) => console.log(error));
    }, [page]);

    const handleSeeAll = () => {
        setPage(page + 1);
    };



    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.root}
                    icon={<HomeIcon />}
                    activeIcon={<HomeIconActive></HomeIconActive>}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupIconActive></UserGroupIconActive>}
                ></MenuItem>
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveIconActive></LiveIconActive>}
                ></MenuItem>
            </Menu>
            <hr className={cx('hr-item')}></hr>
            <SuggestedAccounts
                label="Suggested accounts"
                more="See all"
                data={suggestedUsers}
                onSeeAll={handleSeeAll}
            ></SuggestedAccounts>

            {/* lam them mot cai followingAccount, tam thoi de cho no giong */}
            <SuggestedAccounts
                label="Following accounts"
                more="See more"
            ></SuggestedAccounts>
        </aside>
    );
}

export default Sidebar;
