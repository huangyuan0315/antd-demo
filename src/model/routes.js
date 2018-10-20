
import Loadable from 'react-loadable';
import { loading } from './config';
const Home = Loadable({
    loader: () => import(/* webpackChunkName: "lodash" */ '../pages/Home'),
    ...loading
});
const User = Loadable({
    loader: () => import(/* webpackChunkName: "lodash" */ '../pages/User'),
    ...loading
});
const About = Loadable({
    loader: () => import(/* webpackChunkName: "lodash" */ '../pages/About'),
    ...loading
});
const News = Loadable({
    loader: () => import(/* webpackChunkName: "lodash" */ '../pages/News'),
    ...loading
});
const Forms = Loadable({
    loader: () => import(/* webpackChunkName: "lodash" */ '../pages/Forms'),
    ...loading
});
const Todolist = Loadable({
    loader: () => import(/* webpackChunkName: "lodash" */ '../pages/Todolist'),
    ...loading
});
const Hotspot = Loadable({
    loader: () => import(/* webpackChunkName: "lodash" */ '../components/Hotspot'),
    ...loading
});
const Military = Loadable({
    loader: () => import(/* webpackChunkName: "lodash" */ '../components/Military'),
    ...loading
});
const NewsList = Loadable({
    loader: () => import(/* webpackChunkName: "lodash" */ '../components/NewsList'),
    ...loading
});
const VideoDetails = Loadable({
    loader: () => import(/* webpackChunkName: "lodash" */ '../components/VideoDetails'),
    ...loading
});

const routes = [
    {
        path: "/yuan/home",
        name: 'Home',
        exact: true,
        component: Home
    },
    {
        path: `/yuan/VideoDetails/:aid`,
        name: 'VideoDetails',
        component: VideoDetails
    },
    {
        path: '/yuan/users',
        name: 'Users',
        component: User
    },
    {
        path: '/yuan/about',
        name: 'About',
        component: About
    },
    {
        path: '/yuan/news',
        name: 'News',
        component: News,
        routes: [
            {
                path: '/yuan/news/',
                name: '新闻',
                component: NewsList
            }, {
                path: '/yuan/news/hotspot',
                name: '热点',
                component: Hotspot
            }, {
                path: '/yuan/news/military',
                name: '军事',
                component: Military
            }]
    },
    {
        path: '/yuan/forms',
        name: 'Forms',
        component: Forms
    },
    {
        path: '/yuan/todolist',
        name: 'Todolist',
        component: Todolist
    }
];
export default routes;
