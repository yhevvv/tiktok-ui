import Style from './DetailListComment.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { Flag } from '~/Components/Icons';
import { Trash } from '~/Components/Icons';
import * as commentDeleteService from '~/Service/Comment/commentDeleteService';
import Cookies from 'js-cookie';
import { faCircleCheck, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import AccountPreview from '~/Components/SuggestedAccounts/AccountPreview';
import { Wrapper as PropperWrapper } from '~/Components/Popper';

function DetailListComment({ data }) {
    const cx = classNames.bind(Style);

    const token = Cookies.get('isToken');
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

    const renderTippyDelete = () => {
        return (
            <div>
                <div
                    className={cx('wrapper-tippy-report')}
                    onClick={() => {
                        setTimeout(() => {
                            window.location.reload();
                        }, 500); // wait for 1 second before reloading
                        HandleDelete();
                    }}
                >
                    <span className={cx('title-report')}>
                        <Trash width={'24px'} height={'24px'}></Trash> Delete
                    </span>
                </div>
            </div>
        );
    };

    // tippy render preview
    const previewUser = () => {
        return (
            <div>
                {data?.user !== undefined && (
                    <PropperWrapper>
                        <AccountPreview data={data?.user} />
                    </PropperWrapper>
                )}
            </div>
        );
    };

    return (
        <>
            <div className={cx('commented-item')}>
                <Tippy
                    render={previewUser}
                    interactive
                    delay={[700, 700]}
                    offset={[0, -5]}
                    placement={'bottom-start'}
                >
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
                </Tippy>
                <div className={cx('user-item')}>
                    <Tippy
                        render={previewUser}
                        interactive
                        delay={[700, 700]}
                        offset={[0, -5]}
                        placement={'bottom-start'}
                    >
                        <span className={cx('name-user')}>
                            {data?.user?.first_name +
                                ' ' +
                                data?.user?.last_name}
                        </span>
                    </Tippy>
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
                    <span className={cx('comment-user')}>{data?.comment}</span>
                    <br></br>
                    <div className={cx('reply-item-user')}>
                        <span className={cx('time-upload-after')}>
                            {data?.created_at}
                        </span>
                        <span className={cx('reply-another-user')}>Reply</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailListComment;
