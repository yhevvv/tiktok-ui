import Config from '~/Config';
//layout
import { HeaderOnly } from '~/Layouts';
import FullLayout from '~/Layouts/FullLayout';

import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profiles';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';
import Live from '~/Pages/Live';

//public Routers
const PublicRouters = [
    { path: Config.routes.root, component: Home },
    { path: Config.routes.following, component: Following },
    { path: Config.routes.profile, component: Profile, layout: FullLayout},
    { path: Config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: Config.routes.search, component: Search, layout: null },
    { path: Config.routes.live, component: Live },

];

// Từ react-router-dom 6.6.0 pattern chứa @ không còn dùng được nữa
// nghĩa là cấu hình từ
//       { path: "/@:nickname", component: Profile }

// bỏ @ đi sẽ work nhé
// ->   { path: "/:nickname", component: Profile }

//private Routers
const PrivateRouters = [];

export { PublicRouters, PrivateRouters };
