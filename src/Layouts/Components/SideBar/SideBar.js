import { useState, useLayoutEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import Cookies from 'js-cookie';

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

import * as userService from '~/Service/suggestedService';
import * as followingAccountsService from '~/Service/followingAccountsService';
import Discover from '~/Components/Discover';
import Tag from '~/Components/Discover/tag';
import PopupSign from '~/Components/PopupSign';
import { dataContext } from '~/Components/PopupSign/dataContext';

function Sidebar() {
    const cx = classNames.bind(Style);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    const INIT_PAGE_SUGGEST = getRandomInt(20);
    const INIT_FOLLOWING = getRandomInt(4);
    const PER_PAGE = 5;

    const [pageFollowing, setPageFollowing] = useState(INIT_FOLLOWING);
    const [pageSuggest, setPageSuggest] = useState(INIT_PAGE_SUGGEST);

    const [suggestedUsers, setSuggestUsers] = useState([]);
    const [followingUsers, setFollowingUsers] = useState([]);

    const [isCheckUser, setisCheckUser] = useState(null);

    useLayoutEffect(() => {
        userService
            .getSuggested({ page: pageSuggest, perPage: PER_PAGE })
            .then((data) => {
                setSuggestUsers((prevUsers) => [...prevUsers, ...data]); //lay du lieu cu va them du lieu
            })
            .catch((error) => console.log(error));

        if (dataContext !== []) {
            setisCheckUser(dataArray);
        }
        const dataCookie = Cookies.get('dataUser');
        if (dataCookie || dataCookie != null) {
            try {
                const parsedData = JSON.parse(dataCookie);
                setisCheckUser(parsedData);
                const isToken = parsedData.meta.token;
                followingAccountsService
                    .followingAccount({ page: pageFollowing, token: isToken })
                    .then((data2) => {
                        setFollowingUsers((prevFollowing) => [
                            ...prevFollowing,
                            ...data2,
                        ]); //lay du lieu cu va them du lieu
                    })
                    .catch((error) => console.log(error));
            } catch (error) {
                //console.error('Error parsing JSON:', error); //is always null for data cookie
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageSuggest]);

    const getSuggestedHandleSeeAll = (moreItem) => {
        setPageSuggest(pageSuggest + 1);
        setPageFollowing(pageFollowing + 1);
    };

    const dataArray = useContext(dataContext);
    const currentUser = isCheckUser === null ? false : true;

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
            <div className={cx('mobile-fixed')}>
                <hr className={cx('hr-item')}></hr>
                {!currentUser && (
                    <div>
                        <p className={cx('wrapper-login')}>
                            Log in to follow creators, like videos, and view
                            comments.
                        </p>
                        <PopupSign title={'Log In'}></PopupSign>
                        <hr className={cx('hr-item')}></hr>
                    </div>
                )}
                <SuggestedAccounts
                    label="Suggested accounts"
                    more="See all"
                    data={suggestedUsers}
                    onClick={getSuggestedHandleSeeAll}
                ></SuggestedAccounts>
                <hr className={cx('hr-item')}></hr>

                {currentUser && (
                    <div>
                        <SuggestedAccounts
                            label="Following accounts"
                            more="See more"
                            data={followingUsers}
                            onClick={getSuggestedHandleSeeAll}
                        ></SuggestedAccounts>
                        <hr className={cx('hr-item')}></hr>
                    </div>
                )}

                <Discover>
                    <Tag title="suthatla" icon={<HashTag></HashTag>}></Tag>
                    <Tag
                        title="Yêu Đơn Phương Là Gì (MEE Remix)"
                        icon={<MusicNote />}
                    ></Tag>
                </Discover>
                <hr className={cx('hr-item')}></hr>
            </div>
        </aside>
    );
}

export default Sidebar;
