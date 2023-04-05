import classNames from 'classnames/bind';
import images from '~/assets/images';
import Images from '~/Components/Image';
import Button from '~/Components/Button';
import Style from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useState, useEffect, useLayoutEffect, memo } from 'react';
import Cookies from 'js-cookie';
import * as CheckFollowingService from '~/Service/Following/CheckFollowingService';
import PopupSign from '~/Components/PopupSign';
import { Link } from 'react-router-dom';
import * as FollowingService from '~/Service/Following/FollowingService';
import * as unFollowingProfile from '~/Service/Following/UnFollowingService';

function AccountPreview({ data }) {
    const cx = classNames.bind(Style);

    //api check following
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

    const checkFollowingStart = checkFollowingID.includes(data.id);

    const [changeFollowing, setChangeFollowing] = useState();

    useLayoutEffect(() => {
        setChangeFollowing(checkFollowingStart);
    }, [checkFollowingStart]);

    //api following & logic signup
    const handleFollowing = async () => {
        const token = Cookies.get('isToken');
        if (
            Cookies.get('isToken') !== undefined &&
            Cookies.get('isToken') !== 'null'
        ) {
            try {
                await FollowingService.Following({
                    token: token,
                    id_nickname: data.id,
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
                    nickname: data.id,
                });
            } catch (error) {
                console.log(error);
            }
        }
        setChangeFollowing(!changeFollowing);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Link to={`/@${data.nickname}`} onClick={() => window.reload()}>
                    <Images
                        className={cx('avatar')}
                        src={data.avatar}
                        alt={images.NoImage}
                    ></Images>
                </Link>
                {checkFollowingID.includes(data.id) === false ? (
                    <>
                        {Cookies.get('isToken') !== undefined &&
                        Cookies.get('isToken') !== 'null' ? (
                            <>
                                {changeFollowing === false ? (
                                    <div className={cx('btn-follow')}>
                                        <Button
                                            primary
                                            onClick={handleFollowing}
                                        >
                                            Follow
                                        </Button>
                                    </div>
                                ) : (
                                    <>
                                        <div className={cx('btn-follow')}>
                                            <Button
                                                text
                                                onClick={handleUnFollowing}
                                            >
                                                Following
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </>
                        ) : (
                            <PopupSign
                                title="Follow"
                                className="btn-loginHeader"
                            ></PopupSign>
                        )}
                    </>
                ) : (
                    <>
                        {changeFollowing ? (
                            <div className={cx('btn-follow')}>
                                <Button text onClick={handleUnFollowing}>
                                    Following
                                </Button>
                            </div>
                        ) : (
                            <div className={cx('btn-follow')}>
                                <Button primary onClick={handleFollowing}>
                                    Follow
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </header>

            <div className={cx('item-info')}>
                <span className={cx('nickname')}>
                    <Link
                        onClick={() => window.reload()}
                        to={`/@${data.nickname}`}
                    >{`${data.first_name} ${data.last_name}`}</Link>
                    {data.tick && (
                        <FontAwesomeIcon
                            className={cx('check')}
                            icon={faCheckCircle}
                        ></FontAwesomeIcon>
                    )}
                </span>
                <br></br>
                <Link onClick={() => window.reload()} to={`/@${data.nickname}`}>
                    <span className={cx('name')}>{data.nickname}</span>
                </Link>
                <p className={cx('analytics')}>
                    <span className={cx('following-number')}>
                        {data.followers_count}
                    </span>
                    <span className={cx('following')}>Followers</span>
                    <span className={cx('Like-number')}>
                        {data.likes_count}
                    </span>
                    <span className={cx('Like')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default memo(AccountPreview);
