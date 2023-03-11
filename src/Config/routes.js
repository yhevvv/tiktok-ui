import Cookies from 'js-cookie';


const routes = {
    root: '/',
    following: '/following',
    Profile: '/:nickname',
    upload: '/upload',
    search: '/search',
    live: '/live',
};

if (JSON.parse(Cookies.get('dataUser') !== undefined)){
    const dataNickname = Cookies.get('dataUser') === '' ?  '': JSON.parse(Cookies.get('dataUser'));
    routes.meProfile = `/me/@${dataNickname?.data?.nickname}`
}

export default routes;
