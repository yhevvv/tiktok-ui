import Button from '~/Components/Button';
import classNames from 'classnames/bind';
import Style from './FollowingBtn.module.scss';
import { useState, useEffect, useLayoutEffect } from 'react';
import Cookies from 'js-cookie';
import * as FollowingService from '~/Service/Following/FollowingService';
import * as CheckFollowingService from '~/Service/Following/CheckFollowingService';
import * as unFollowingProfile from '~/Service/Following/UnFollowingService';
import Tippy from '@tippyjs/react/headless';
import PopupSign from '~/Components/PopupSign';

function FollowingBtn({ data }) {
    const cx = classNames.bind(Style);

    //api check following (logic following)
    const [checkFollowing, setCheckFollowing] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (
            Cookies.get('isToken') !== undefined &&
            Cookies.get('isToken') !== 'null'
        ) {
            CheckFollowingService.CheckFollowing({
                token: Cookies.get('isToken'),
                page: page,
            })
                .then((data) => {
                    setCheckFollowing((prev) => [...prev, ...data]);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        if (page < checkFollowing.length / 5) {
            setPage(page + 1);
        }
    }, [checkFollowing.length, page]);

    const checkFollowingID = [];
    for (let i = 0; i < checkFollowing.length; i++) {
        checkFollowingID.push(checkFollowing[i].id);
    }

    const checkFollowingStart = checkFollowingID.includes(data?.user?.id);

    const [changeFollowing, setChangeFollowing] = useState();

    useLayoutEffect(() => {
        setChangeFollowing(checkFollowingStart);
    }, [checkFollowingStart]);

    //api following
    const handleFollowing = async () => {
        const token = Cookies.get('isToken');
        if (
            Cookies.get('isToken') !== undefined &&
            Cookies.get('isToken') !== 'null'
        ) {
            try {
                await FollowingService.Following({
                    token: token,
                    id_nickname: data?.user?.id,
                });
            } catch (error) {
                console.log(error);
            }
            setChangeFollowing(!changeFollowing);
        }
    };

    //api unfollowing
    const handleUnFollowing = async () => {
        const token = Cookies.get('isToken');
        if (
            Cookies.get('isToken') !== undefined &&
            Cookies.get('isToken') !== 'null'
        ) {
            try {
                unFollowingProfile.UnFollowing({
                    token: token,
                    nickname: data?.user?.id,
                });
            } catch (error) {
                console.log(error);
            }
        }
        setChangeFollowing(!changeFollowing);
    };

    return (
        <>
            {checkFollowingID.includes(data?.user?.id) === false ? (
                <div className={cx('outline-editProfile')}>
                    {changeFollowing ? (
                        <div className={cx('btn-after-follow')}>
                            <Tippy
                                delay={[0, 100]}
                                offset={[12, 8]}
                                content="Unfollow"
                                placement="bottom"
                            >
                                <div className={cx('unfollow')}>
                                    <Button
                                        text
                                        className={cx('btn-Following')}
                                        onClick={handleUnFollowing}
                                    >
                                        Following
                                    </Button>
                                </div>
                            </Tippy>
                        </div>
                    ) : (
                        <>
                            {Cookies.get('isToken') !== undefined &&
                            Cookies.get('isToken') !== 'null' ? (
                                <Button
                                    outline
                                    className={cx('btn-Follow')}
                                    onClick={handleFollowing}
                                >
                                    <strong className={cx('btn-text')}>
                                        Follow
                                    </strong>
                                </Button>
                            ) : (
                                <PopupSign
                                    className="btn-editProfile"
                                    title="Follow"
                                ></PopupSign>
                            )}
                        </>
                    )}
                </div>
            ) : (
                <div className={cx('outline-editProfile')}>
                    {changeFollowing ? (
                        <div className={cx('btn-after-follow')}>
                            <Tippy
                                delay={[0, 100]}
                                offset={[12, 8]}
                                content="Unfollow"
                                placement="bottom"
                            >
                                <div className={cx('unfollow')}>
                                    <Button
                                        text
                                        className={cx('btn-Following')}
                                        onClick={handleUnFollowing}
                                    >
                                        Following
                                    </Button>
                                </div>
                            </Tippy>
                        </div>
                    ) : (
                        <>
                            {Cookies.get('isToken') !== undefined &&
                            Cookies.get('isToken') !== 'null' ? (
                                <Button
                                    outline
                                    className={cx('btn-Follow')}
                                    onClick={handleFollowing}
                                >
                                    <strong className={cx('btn-text')}>
                                        Follow
                                    </strong>
                                </Button>
                            ) : (
                                <PopupSign
                                    className="btn-editProfile"
                                    title="Follow"
                                ></PopupSign>
                            )}
                        </>
                    )}
                </div>
            )}
        </>
    );
}

export default FollowingBtn;
