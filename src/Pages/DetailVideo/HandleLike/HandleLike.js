import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Style from './HandleLike.module.scss';
import { useState } from 'react';
import * as likeService from '~/Service/Interact/likeService';
import * as unLikeService from '~/Service/Interact/unLikeService';
import Cookies from 'js-cookie';

function HandleLike({ data }) {
    const cx = classNames.bind(Style);

    const token = Cookies.get('isToken');
    //like interact
    const [changeLike, setChangeLike] = useState(false);
    const [dataLike, setDataLike] = useState(data?.likes_count);

    const handleLike = () => {
        if (token !== 'null' && token !== undefined && changeLike === false) {
            likeService
                .Like({ token: token, id: data?.id })
                .then((data) => {
                    setDataLike(data?.likes_count);
                })
                .catch((error) => console.log(error));

            setChangeLike(!changeLike);
        } else if (
            token !== 'null' &&
            token !== undefined &&
            changeLike === true
        ) {
            unLikeService
                .UnLike({ token: token, id: data?.id })
                .then((data) => {
                    setDataLike(data?.likes_count);
                })
                .catch((error) => console.log(error));
            setChangeLike(!changeLike);
        }
    };

    return (
        <>
            <span className={cx('icon-item')} onClick={handleLike}>
                <FontAwesomeIcon
                    icon={faHeart}
                    style={{
                        color: changeLike ? '#fe2c55' : '',
                        width: '20px',
                        height: '20px',
                    }}
                ></FontAwesomeIcon>
            </span>
            <span className={cx('count-heart')}>
                {dataLike || data?.likes_count}
            </span>
        </>
    );
}

export default HandleLike;
