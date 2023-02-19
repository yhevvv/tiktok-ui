//layout
import { HeaderOnly } from '~/Components/Layout'


import Home from '~/Pages/Home'
import Following from '~/Pages/Following'
import Profile from '~/Pages/Profiles'
import Upload from '~/Pages/Upload'
import Search from '~/Pages/Search'


//public Routers
const PublicRouters = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly},
    { path: '/search', component: Search, layout: null},


]

//private Routers
const PrivateRouters = [

]


export { PublicRouters, PrivateRouters }