import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Style from './ListComment.module.scss';
import * as commentListService from '~/Service/Comment/commentListService';
import Cookies from 'js-cookie';
import { faCircleCheck, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Flag, Trash } from '~/Components/Icons';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as commentDeleteService from '~/Service/Comment/commentDeleteService';
import Tippy from '@tippyjs/react/headless';
import ReactionComment from './ReactionComment';

function ListComment({ data }) {
    const cx = classNames.bind(Style);

    const token = Cookies.get('isToken');

    //get list comment
    const [listComment, setListComment] = useState([]);

    useEffect(() => {
        commentListService
            .commentList({ token: token, id_video: data?.id })
            .then((data) => {
                setListComment(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [data?.id, token]);

    const myData = JSON.parse(Cookies.get('dataUser'));

    //api delete my comment
    const HandleDelete = () => {
        commentDeleteService
            .CommentDelete({
                token: token,
                id_comment: Cookies.get('idComment'),
            })
            .then()
            .catch((error) => console.log(error));
    };

    //render tippy Report
    const renderTippyReport = () => {
        return (
            <div>
                <div className={cx('wrapper-tippy-report')}>
                    <span className={cx('title-report')}>
                        <Flag></Flag> Report
                    </span>
                </div>
            </div>
        );
    };

    const renderTippyDelete = (id) => {
        return (
            <div>
                <div
                    className={cx('wrapper-tippy-report')}
                    onClick={HandleDelete}
                >
                    <span className={cx('title-report')}>
                        <Trash width={'24px'} height={'24px'}></Trash> Delete
                    </span>
                </div>
            </div>
        );
    };

    console.log(listComment);

    return (
        <>
            {listComment?.map((data, index) => (
                <div key={index}>
                    {data?.user?.id === myData?.data?.id && (
                        <div style={{ display: 'none' }}>
                            {Cookies.set('idComment', data?.id)}
                        </div>
                    )}
                    <div className={cx('commented-item')}>
                        <img
                            className={cx('avatar-user-comment')}
                            src={
                                data?.user?.avatar ===
                                'https://files.fullstack.edu.vn/f8-tiktok/'
                                    ? images.NoImage
                                    : data?.user?.avatar
                            }
                            alt={images.NoImage}
                        ></img>
                        <div className={cx('user-item')}>
                            <span className={cx('name-user')}>
                                {data?.user?.first_name +
                                    ' ' +
                                    data?.user?.last_name}
                            </span>
                            <>
                                <Tippy
                                    render={
                                        data?.user?.id === myData?.data?.id
                                            ? renderTippyDelete
                                            : renderTippyReport
                                    }
                                    interactive
                                    placement={'bottom-start'}
                                    delay={[0, 200]}
                                >
                                    <span className={cx('dot-report')}>
                                        <FontAwesomeIcon
                                            icon={faEllipsis}
                                            style={{
                                                width: '20px',
                                                height: '20px',
                                            }}
                                        ></FontAwesomeIcon>
                                    </span>
                                </Tippy>
                            </>
                            <span className={cx('creator-user')}>
                                {data?.user?.tick && (
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        style={{
                                            color: '#20d5ec',
                                            width: '14px',
                                            height: '14px',
                                            marginLeft: '4px',
                                        }}
                                    ></FontAwesomeIcon>
                                )}{' '}
                            </span>

                            <br></br>
                            <span className={cx('comment-user')}>
                                {data?.comment}
                            </span>
                            <br></br>
                            <div className={cx('reply-item-user')}>
                                <span className={cx('time-upload-after')}>
                                    {data?.created_at}
                                </span>
                                <span className={cx('reply-another-user')}>
                                    Reply
                                </span>
                            </div>
                        </div>
                    </div>
                    <ReactionComment data={data}></ReactionComment>
                </div>
            ))}
        </>
    );
}

export default ListComment;
