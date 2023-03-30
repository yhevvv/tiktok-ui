import Config from '~/Config';
//layout
import FullLayout from '~/Layouts/FullLayout';

import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/unFollowingProfile';
import meProfile from '~/Pages/meProfile';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import Live from '~/Pages/Live';
import NotFound from '~/Pages/404';

//public Routers
const PublicRouters = [
    { path: Config.routes.root, component: Home },
    { path: Config.routes.following, component: Following },
    { path: Config.routes.live, component: Live, layout: FullLayout },
    { path: Config.routes.search, component: Search, layout: null },
    { path: Config.routes.upload, component: Upload, layout: null },
    {
        path: Config.routes.Profile,
        component: Profile,
        layout: FullLayout,
        exact: true,
    },
    { path: '*', component: NotFound, layout: null },
];

// Từ react-router-dom 6.6.0 pattern chứa @ không còn dùng được nữa
// nghĩa là cấu hình từ
//       { path: "/@:nickname", component: Profile }

// bỏ @ đi sẽ work nhé
// ->   { path: "/:nickname", component: Profile }

//private Routers
const PrivateRouters = [
    { path: Config.routes.meProfile, component: meProfile, layout: FullLayout },
    { path: '*', component: NotFound, layout: null },
];

export { PublicRouters, PrivateRouters };
