import classNames from 'classnames/bind';
import Style from './Live.module.scss';
import { Link } from 'react-router-dom';
import Button from '~/Components/Button';
import { GroupIconLive } from '~/Components/Icons';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function VideoLive({ data }) {
    const cx = classNames.bind(Style);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }
    
    const [NumberView, SetNumberView] = useState();

    useEffect(() => {
        SetNumberView(getRandomInt(999));
    }, []);

    return (
        <>
            <video
                src={data.popular_video.file_url}
                controls
                className={cx('liveVideo')}
            ></video>
            <div className={cx('profile')}>
                <Button primary className={cx('btn-live')}>
                    LIVE
                </Button>
                <br></br>
                <Link to={`/@${data.nickname}`}>
                    <span className={cx('nickname')}>
                        {`@${data.nickname}`}
                        <span className={cx('viewer')}>
                            <GroupIconLive
                                className={cx('icon-group')}
                            ></GroupIconLive>{' '}
                            {NumberView}
                        </span>
                    </span>
                    <div className={cx('title')}>
                        {data.popular_video.description}
                    </div>
                </Link>
            </div>
        </>
    );
}

VideoLive.propTypes = {
    data: PropTypes.object,
};

export default VideoLive;
