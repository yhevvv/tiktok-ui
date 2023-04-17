import { HeartNone, HeartNoneClick } from '~/Components/Icons';
import classNames from 'classnames/bind';
import Style from './ReactionComment.module.scss';
import { useState } from 'react';
import * as commentReactService from '~/Service/Comment/ReactionComment/commentReactService';
import * as commentunReactService from '~/Service/Comment/ReactionComment/commentunReactService';
import Cookies from 'js-cookie';

function ReactionComment({ data }) {
    const cx = classNames.bind(Style);

    const token = Cookies.get('isToken');
    //React API
    const handleReact = () => {
        commentReactService
            .CommentReact({ token: token, id_comment: data?.id })
            .catch((error) => console.log(error));
    };
    //unReact API
    const handleUnReact = () => {
        commentunReactService
            .commentUnReact({ token: token, id_comment: data?.id })
            .catch((error) => console.log(error));
    };
    //logic change color
    const [click, setNonClick] = useState(false);

    const [likesCount, setLikesCount] = useState(data?.likes_count);

    const handleClick = () => {
        setNonClick(!click);
        if (token !== 'null' && token !== undefined && click === false) {
            setLikesCount(likesCount + 1);
            handleUnReact();
        } else if (token !== 'null' && token !== undefined && click === true) {
            setLikesCount(likesCount - 1);
            handleReact();
        }
    };

    return (
        <div className={cx('commented-react-heart')} onClick={handleClick}>
            {click ? (
                <HeartNoneClick width={'20px'} height={'20px'}></HeartNoneClick>
            ) : (
                <HeartNone width={'20px'} height={'20px'}></HeartNone>
            )}
            <span className={cx('number-react-heart')}>{likesCount}</span>
        </div>
    );
}

export default ReactionComment;
