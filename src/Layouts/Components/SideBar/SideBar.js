import { useState, useEffect } from 'react';
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
    HashTag,
    MusicNote,
} from '~/Components/Icons';
import SuggestedAccounts from '~/Components/SuggestedAccounts';
import * as userService from '~/Service/userService';
import Discover from '~/Components/Discover';
import Tag from '~/Components/Discover/tag';


function Sidebar() {
    const cx = classNames.bind(Style);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    const INIT_PAGE = getRandomInt(5);
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
            <hr className={cx('hr-item')}></hr>

            {/* lam them mot cai followingAccount, tam thoi de cho no giong */}
            <SuggestedAccounts
                label="Following accounts"
                more="See more"
            ></SuggestedAccounts>
            <hr className={cx('hr-item')}></hr>

            <Discover>
                <Tag title='suthatla' icon={<HashTag></HashTag>}></Tag>
                <Tag title='Yêu Đơn Phương Là Gì (MEE Remix)' icon={<MusicNote/>}></Tag>
            </Discover>
            <hr className={cx('hr-item')}></hr>

        </aside>
    );
}

export default Sidebar;
