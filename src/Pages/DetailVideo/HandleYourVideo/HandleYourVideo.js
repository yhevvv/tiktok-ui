import Tippy from '@tippyjs/react/headless';
import { Dot } from '~/Components/Icons';
import classNames from 'classnames/bind';
import Style from './HandleYourVideo.module.scss';
import * as deleteVideoService from '~/Service/Video/deleteVideoService';
import Cookies from 'js-cookie';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom';
import IOSTouch from '~/Components/Button/IOSTouch';
import Select from 'react-select';
import mode_upload from './mode_upload.json';
import * as editVideoService from '~/Service/Video/editVideoService';

function HandleYourVideo({ data }) {
    const cx = classNames.bind(Style);

    const token = Cookies.get('isToken');
    const nickname = JSON.parse(Cookies.get('dataUser'));
    const navigate = useNavigate();

    function goBack() {
        navigate(`/me/@${nickname?.data?.nickname}`);
        window.location.reload();
    }

    //css Select
    const customStyles = {
        control: (provider) => ({
            ...provider,
            border: ' 0.5px solid rgba(22,24,35,0.12);',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            boxShadow: '0 0 0 0.5px  rgba(22,24,35,0.12);',
            ':hover': {
                border: ' 1px solid rgba(22,24,35,0.12);',
            },
        }),
        option: (provider) => ({
            ...provider,
            color: 'black',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            ':active': {
                backgroundColor: 'transparent',
            },
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
    };

    //handle value select
    const [select, setSeleted] = useState({
        value: 'public',
        label: 'Public',
    });

    const handleSelect = (option) => {
        setSeleted(option);
    };

    //ios touch comment, duet, stitch
    const [comment, setComment] = useState(true);
    const handleComment = () => {
        setComment(!comment);
    };
    const [duet, setDuet] = useState(true);
    const handleDuet = () => {
        setDuet(!duet);
    };
    const [stitch, setstitch] = useState(true);
    const handleStitch = () => {
        setstitch(!stitch);
    };

    console.log(data?.allows);
    console.log(data?.allows?.includes('comment'));
    console.log(data?.allows?.includes('duet'));
    console.log(data?.allows?.includes('stitch'));

    //API update
    const HandleUpdate = () => {
        editVideoService
            .EditVideo({
                token: token,
                id_video: data.id,
                viewable: select.value,
                comment: !comment ? 'comment' : null,
                duet: !duet ? 'duet' : null,
                stitch: !stitch ? 'stitch' : null,
            })
            .catch((error) => console.log(error));
        setOpenPrivacy(!openPrivacy);
    };
    //API delete
    const HanldeDelete = () => {
        deleteVideoService
            .DeleteVideo({ token: token, id_video: data.id })
            .catch((error) => console.log(error));
        goBack();
    };
    //Popup Privacy Setting
    const [openPrivacy, setOpenPrivacy] = useState(false);

    const handleOpenPrivacy = () => {
        setOpenPrivacy(!openPrivacy);
    };

    //Popup Delete
    const [openDelete, setOpenDelete] = useState(false);

    const handleOpenDelete = () => {
        setOpenDelete(!openDelete);
    };

    //tippy yourVideo
    const handleYourVideo = () => {
        return (
            <div>
                <div className={cx('wrapper-tippy-report')}>
                    <span
                        className={cx('title-privacy')}
                        onClick={handleOpenPrivacy}
                    >
                        Privacy Setting
                    </span>
                    <p
                        className={cx('title-delete')}
                        onClick={handleOpenDelete}
                    >
                        Delete
                    </p>
                    {/* popupdelete */}
                    <Popup open={openDelete} closeOnDocumentClick>
                        <div className={cx('wrapper-popup-delete')}>
                            <h2 className={cx('title-popup-delete')}>
                                Are you sure you want to delete this video?
                            </h2>
                            <p
                                className={cx('popup-delete')}
                                onClick={HanldeDelete}
                            >
                                Delete
                            </p>
                            <p
                                className={cx('popup-delete-cancel')}
                                onClick={handleOpenDelete}
                            >
                                Cancel
                            </p>
                        </div>
                    </Popup>
                    {/* popupupdate */}
                    <Popup open={openPrivacy} closeOnDocumentClick>
                        <div className={cx('wrapper-popup-update')}>
                            <h3 className={cx('title-popup-update')}>
                                Privacy settings
                            </h3>
                            <span className={cx('title2-popup-update')}>
                                Who can watch this video
                            </span>
                            <br></br>
                            <Select
                                className={cx('select-mode')}
                                options={mode_upload}
                                defaultValue={mode_upload[0]}
                                styles={customStyles}
                                onChange={handleSelect}
                            ></Select>
                            <p className={cx('comments-popup-update')}>
                                Allow comments{' '}
                                <div className={cx('iosTouch')}>
                                    <IOSTouch
                                        onChange={handleComment}
                                    ></IOSTouch>
                                </div>
                            </p>
                            <p className={cx('duet-popup-update')}>
                                Allow Duet{' '}
                                <div className={cx('iosTouch')}>
                                    <IOSTouch onChange={handleDuet}></IOSTouch>
                                </div>
                            </p>
                            <p className={cx('stitch-popup-update')}>
                                Allow Stitch{' '}
                                <div className={cx('iosTouch')}>
                                    <IOSTouch
                                        onChange={handleStitch}
                                    ></IOSTouch>
                                </div>
                            </p>
                            <p
                                className={cx('submit-popup-update')}
                                onClick={HandleUpdate}
                            >
                                Done
                            </p>
                        </div>
                    </Popup>
                </div>
            </div>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <Tippy
                render={handleYourVideo}
                interactive
                delay={[700, 700]}
                offset={[0, -5]}
                placement={'bottom-start'}
            >
                <div className={cx('option')}>
                    <Dot></Dot>
                </div>
            </Tippy>
        </div>
    );
}

export default HandleYourVideo;
