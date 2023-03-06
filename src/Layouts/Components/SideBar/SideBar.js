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

import * as userService from '~/Service/videosService';
import * as followingAccountsService from '~/Service/followingAccountsService';
import Discover from '~/Components/Discover';
import Tag from '~/Components/Discover/tag';
import PopupSign from '~/Components/PopupSign';
import { dataContext } from '~/Components/PopupSign/dataContext';

function Sidebar() {
    const cx = classNames.bind(Style);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const INIT_PAGE_SUGGEST = getRandomInt(10);
    const INIT_PAGE_FOLLOWING = getRandomInt(1, 4);
    const PER_PAGE = 5;

    const [pageSuggest, setPageSuggest] = useState(INIT_PAGE_SUGGEST);
    const [pageFollowing, setPageFollowing] = useState(INIT_PAGE_FOLLOWING);

    const [suggestedUsers, setSuggestUsers] = useState([]);
    const [followingUsers, setFollowingUsers] = useState([]);

    const [isCheckUser, setisCheckUser] = useState(null);

    useLayoutEffect(() => {
        userService
            .getSuggested({ pageSuggest, perPage: PER_PAGE })
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
                    .followingAccount({ pageFollowing }, isToken)
                    .then((data) => {
                        setFollowingUsers((prevUsers) => [
                            ...prevUsers,
                            ...data,
                        ]); //lay du lieu cu va them du lieu
                    })
                    .catch((error) => console.log(error));
            } catch (error) {
                //console.error('Error parsing JSON:', error); //is always null for data cookie
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageSuggest]);

    console.log(pageSuggest);

    const getSuggestedhandleSeeAll = () => {
        setPageSuggest(pageSuggest + 1);
    };

    const followingAccountsServicehandleSeeAll = () => {
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
                    <>
                        <p className={cx('wrapper-login')}>
                            Log in to follow creators, like videos, and view
                            comments.
                        </p>
                        <PopupSign title={'Log In'}></PopupSign>
                        <hr className={cx('hr-item')}></hr>
                    </>
                )}
                <SuggestedAccounts
                    label="Suggested accounts"
                    more="See all"
                    data={suggestedUsers}
                    onSeeAll={getSuggestedhandleSeeAll}
                ></SuggestedAccounts>
                <hr className={cx('hr-item')}></hr>

                {currentUser && (
                    <>
                        <SuggestedAccounts
                            label="Following accounts"
                            more="See more"
                            data={followingUsers}
                            onSeeAll={followingAccountsServicehandleSeeAll}
                        ></SuggestedAccounts>
                        <hr className={cx('hr-item')}></hr>
                    </>
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
