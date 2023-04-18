import { Link } from 'react-router-dom';
import ProfileVideo from '../ProfileVideo';

function PreviewProfile({ data }) {
    return (
        <Link
            to={`/@${data?.user?.nickname}`}
            style={{ display: 'flex', flexDirection: 'row' }}
        >
            <ProfileVideo data={data}></ProfileVideo>
        </Link>
    );
}

export default PreviewProfile;
