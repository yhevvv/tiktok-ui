import Cookies from 'js-cookie';

const dataNickname = JSON.parse(Cookies.get('dataUser'));

const routes = {
    root: '/',
    following: '/following',
    Profile: '/:nickname',
    meProfile: `/me/@${dataNickname?.data?.nickname}`,
    upload: '/upload',
    search: '/search',
    live: '/live',
};


export default routes;
