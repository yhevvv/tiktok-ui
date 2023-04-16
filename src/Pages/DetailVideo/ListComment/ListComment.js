import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Style from './ListComment.module.scss';
import * as commentListService from '~/Service/Comment/commentListService';
import Cookies from 'js-cookie';
import { faCircleCheck, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { HeartNone, Flag } from '~/Components/Icons';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import * as commentDeleteService from '~/Service/Comment/commentDeleteService';
import Tippy from '@tippyjs/react/headless';

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

    // const myData = JSON.parse(Cookies.get('dataUser'));
    // console.log(listComment.user);

    //render tippy Report
    const renderTippyReport = () => {
        return (
            <div className={cx('wrapper-tippy-report')}>
                <span className={cx('title-report')}>
                    <Flag></Flag> Report
                </span>
                {/* {listComment?.user?.includes(myData?.data?.id) && (
                    <div>
                        <span className={cx('title-report')}>
                            <Flag></Flag> Report
                        </span>
                    </div>
                )} */}
            </div>
        );
    };
    //delete my comment
    const hanleDelete = (id) => {
        // commentDeleteService.hanleDelete({token: token, id_comment: })
    };

    return (
        <>
            {listComment?.map((data, index) => (
                <div key={index}>
                    <div className={cx('commented-item-display')}>
                        <div className={cx('commented-item-display2')}>
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
                                    <Tippy
                                        render={renderTippyReport}
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
                                    <br></br>
                                    <span className={cx('comment-user')}>
                                        {data?.comment}
                                    </span>
                                    <br></br>
                                    <div className={cx('reply-item-user')}>
                                        <span
                                            className={cx('time-upload-after')}
                                        >
                                            {data?.created_at}
                                        </span>
                                        <span
                                            className={cx('reply-another-user')}
                                        >
                                            Reply
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('commented-react-heart')}>
                                <HeartNone
                                    width={'20px'}
                                    height={'20px'}
                                ></HeartNone>
                                <span className={cx('number-react-heart')}>
                                    {data?.likes_count}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ListComment;
