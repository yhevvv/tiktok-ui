import classNames from "classnames/bind";
import Style from './Home.module.scss'
import VideoItem from "./VideoItem";

const cx = classNames.bind(Style)

function Home() {
    return (
    <div>
        <h1>Home Page</h1>
        <VideoItem></VideoItem>
    </div>
    )
}

export default Home;
