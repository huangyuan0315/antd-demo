import Home from '../pages/Home';
import User from '../pages/User';
import About from '../pages/About';
import News from '../pages/News';
import Forms from '../pages/Forms';
import Todolist from '../pages/Todolist';
import Hotspot from '../components/Hotspot';
import Military from '../components/Military';
import NewsList from '../components/NewsList';
import VideoDetails from '../components/VideoDetails';
const routes = [
    {
        path: "/",
        name: 'Home',
        exact: true,
        component: Home
    },
    {
        path: `/VideoDetails/:aid`,
        name: 'VideoDetails',
        component: VideoDetails
    },
    {
        path: '/users',
        name: 'Users',
        component: User
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/news',
        name: 'News',
        component: News,
        routes: [
            {
                path: '/news/',
                name: 'newss',
                component: NewsList
            }, {
                path: '/news/hotspot',
                name: 'hotspot',
                component: Hotspot
            }, {
                path: '/news/military',
                name: 'military',
                component: Military
            }]
    },
    {
        path: '/forms',
        name: 'Forms',
        component: Forms
    },
    {
        path: '/todolist',
        name: 'Todolist',
        component: Todolist
    }
];
export default routes;
