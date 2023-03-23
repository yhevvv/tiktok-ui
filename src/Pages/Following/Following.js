import classNames from "classnames/bind";
import Style from "./Following.module.scss";
import FollowingVideos from "./FollowingVideo/FollowingVideos";

function Following() {

    const cx = classNames.bind(Style)

    return (
        <div className={cx('wrapper')}>
            <FollowingVideos></FollowingVideos>
        </div>
    );
}

export default Following;
