import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCommentDots,
    faHeart,
    faShare,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Style from './Interact.module.scss';

import { useState, useEffect } from 'react';

import Button from '~/Components/Button';
import * as likeService from '~/Service/Interact/likeService';
import * as unLikeService from '~/Service/Interact/unLikeService';
import Cookies from 'js-cookie';
import PopupSign from '~/Components/PopupSign';
import MenuShare from '~/Components/MenuShare';
import { Link } from 'react-router-dom';

function Interact({ data }) {
    const cx = classNames.bind(Style);

    const token = Cookies.get('isToken');

    //like interact
    const [changeLike, setChangeLike] = useState(false);
    const [dataLike, setDataLike] = useState(data.likes_count);

    const handleLike = () => {
        if (token !== 'null' && token !== undefined && changeLike === false) {
            likeService
                .Like({ token: token, id: data.id })
                .then((data) => {
                    setDataLike(data.likes_count);
                })
                .catch((error) => console.log(error));

            setChangeLike(!changeLike);
        } else if (
            token !== 'null' &&
            token !== undefined &&
            changeLike === true
        ) {
            unLikeService
                .UnLike({ token: token, id: data.id })
                .then((data) => {
                    setDataLike(data.likes_count);
                })
                .catch((error) => console.log(error));
            setChangeLike(!changeLike);
        }
    };

    return (
        <>
            {token !== 'null' && token !== undefined ? (
                <Button
                    noneBtn
                    className={cx('btn-interact')}
                    onClick={handleLike}
                >
                    <span className={cx('icon-item')}>
                        <FontAwesomeIcon
                            icon={faHeart}
                            style={{
                                color: changeLike ? '#fe2c55' : '',
                            }}
                        ></FontAwesomeIcon>
                    </span>
                    <strong className={cx('count-item')}>{dataLike}</strong>
                </Button>
            ) : (
                <PopupSign
                    className={'btn-interact'}
                    title={
                        <>
                            <span className={cx('icon-item')}>
                                <FontAwesomeIcon
                                    icon={faHeart}
                                ></FontAwesomeIcon>
                            </span>
                            <strong className={cx('count-item')}>
                                {data.likes_count}
                            </strong>
                        </>
                    }
                ></PopupSign>
            )}
            {token !== 'null' && token !== undefined ? (
                <Link to={`/@${data.user.nickname}/video/${data.id}`}>
                    <Button noneBtn className={cx('btn-interact')}>
                        <span className={cx('icon-item')}>
                            <FontAwesomeIcon
                                icon={faCommentDots}
                            ></FontAwesomeIcon>
                        </span>
                        <strong className={cx('count-item')}>
                            {data.comments_count}
                        </strong>
                    </Button>
                </Link>
            ) : (
                <PopupSign
                    className={'btn-interact'}
                    title={
                        <>
                            <span className={cx('icon-item')}>
                                <FontAwesomeIcon
                                    icon={faCommentDots}
                                ></FontAwesomeIcon>
                            </span>
                            <strong className={cx('count-item')}>
                                {data.comments_count}
                            </strong>
                        </>
                    }
                ></PopupSign>
            )}
            {token !== 'null' && token !== undefined ? (
                <MenuShare
                    icon={
                        <>
                            <Button noneBtn className={cx('btn-interact')}>
                                <span
                                    className={cx('icon-item')}
                                    style={{ marginLeft: '13px' }}
                                >
                                    <FontAwesomeIcon
                                        icon={faShare}
                                    ></FontAwesomeIcon>
                                </span>
                                <strong className={cx('count-item')}>
                                    {data.shares_count}
                                </strong>
                            </Button>
                        </>
                    }
                ></MenuShare>
            ) : (
                <PopupSign
                    className={'btn-interact'}
                    title={
                        <>
                            <span className={cx('icon-item')}>
                                <FontAwesomeIcon
                                    icon={faShare}
                                ></FontAwesomeIcon>
                            </span>
                            <strong className={cx('count-item')}>
                                {data.shares_count}
                            </strong>
                        </>
                    }
                ></PopupSign>
            )}
        </>
    );
}

export default Interact;
