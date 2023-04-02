import Popup from 'reactjs-popup';
import classNames from 'classnames/bind';
import Style from './PopPost.module.scss';
import { Link } from 'react-router-dom';
import Button from '~/Components/Button';
import Cookies from 'js-cookie';

function PopPost({ open }) {
    const cx = classNames.bind(Style);

    const handleReload = () => {
        window.location.reload();
    };
    return (
        <>
            <Popup open={open}>
                <div className={cx('wrapper')}>
                    <p className={cx('title')}>
                        Your videos are being uploaded to TikTok!
                    </p>
                    <Button
                        className={cx('btn-reload')}
                        primary
                        onClick={handleReload}
                    >
                        Upload another video
                    </Button>
                    <br></br>
                    <Link
                        to={`/me/@${
                            JSON.parse(Cookies.get('dataUser'))?.data?.nickname
                        }`}
                    >
                        <Button text className={cx('btn-me')}>
                            View profile
                        </Button>
                    </Link>
                </div>
            </Popup>
        </>
    );
}

export default PopPost;
