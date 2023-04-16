import classNames from 'classnames/bind';
import Style from './yourComment.module.scss';
import { useState, useRef } from 'react';
import AtClick from '../ATClick/AtClick';
import Tippy from '@tippyjs/react';
import { EmotionDetail } from '~/Components/Icons';
import Button from '~/Components/Button';
import * as commentCreateService from '~/Service/Comment/commentCreateService';
import Cookies from 'js-cookie';

function YourComment({ data }) {
    const cx = classNames.bind(Style);

    //count charater in comment
    const [text, setText] = useState('');
    const handleChangeText = (event) => {
        const textCharater = event.target.innerText;
        if (textCharater <= 150) {
            setText(textCharater);
        } else {
            event.target.textContent = textCharater.substring(0, 150);
            setText(textCharater.substring(0, 150));
        }
    };
    //At click
    const inputRef = useRef(null);

    //Create comment
    const token = Cookies.get('isToken');
    const handleSubmit = () => {
        commentCreateService
            .CommentCreate({ token: token, id_video: data?.id, comment: text })
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
        setText('');
    };

    return (
        <>
            <div className={cx('comment-input-item-display')}>
                <div className={cx('comment-input-item')}>
                    <div
                        type={'text'}
                        placeholder={'Add comment...'}
                        className={cx('comment-input')}
                    >
                        <div
                            contentEditable={true}
                            className={cx('span-comment')}
                            onFocus={(event) => {
                                const comment = event.target;

                                if (comment.innerText === 'Add comment...') {
                                    comment.innerText = '';
                                }
                            }}
                            onBlur={(event) => {
                                const comment = event.target;

                                if (comment.innerText === '') {
                                    comment.innerText = 'Add comment...';
                                }
                            }}
                            onInput={handleChangeText}
                            ref={inputRef}
                        >
                            Add comment...
                        </div>
                    </div>
                    {text.length >= 150 ? (
                        <span
                            className={cx('count-charater')}
                            style={{ color: 'rgba(255, 76, 58, 0.92)' }}
                        >
                            {text?.length}/150
                        </span>
                    ) : (
                        <span className={cx('count-charater')}>
                            {text?.length}/150
                        </span>
                    )}
                    <span className={cx('area-react')}>
                        <AtClick inputRef={inputRef}></AtClick>
                        <Tippy content={'Click to add Emojis'}>
                            <span style={{ cursor: 'pointer' }}>
                                <EmotionDetail
                                    width={'20px'}
                                    height={'20px'}
                                ></EmotionDetail>
                            </span>
                        </Tippy>
                    </span>
                    <span className={cx('btn-submit-comment')}>
                        <Button
                            noneBtnColorRed
                            disable={text?.length === 0}
                            onClick={handleSubmit}
                        >
                            Post
                        </Button>
                    </span>
                </div>
            </div>
        </>
    );
}

export default YourComment;
