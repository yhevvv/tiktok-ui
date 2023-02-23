import routesConfig from '~/Config/routes'
//layout
import { HeaderOnly } from '~/Components/Layout';

import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profiles';
import Upload from '~/Pages/Upload';
import Search from '~/Pages/Search';

//public Routers
const PublicRouters = [
    { path: routesConfig.root, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

// Từ react-router-dom 6.6.0 pattern chứa @ không còn dùng được nữa
// nghĩa là cấu hình từ
//       { path: "/@:nickname", component: Profile }

// bỏ @ đi sẽ work nhé
// ->   { path: "/:nickname", component: Profile }

//private Routers
const PrivateRouters = [];

export { PublicRouters, PrivateRouters };
