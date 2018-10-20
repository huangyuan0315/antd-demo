import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { loading } from './model/config';

const LandAfter = Loadable({
    loader: () => import(/* webpackChunkName: "lodash" */ './model/LandAfter'),
    ...loading
});
const Login = Loadable({
    loader: () => import(/* webpackChunkName: "lodash" */ './model/Login'),
    ...loading
});

// 受保护页面拦截器，在本级页面进行拦截，如果发现未登录，则跳转到登录页面，否则允许进入隐私页面
const ProtectPage = props => {
    // 如果没有登录
    if (!localStorage.getItem('LAND')) {
        return <Redirect to='/login'></Redirect>
    } else {
        return <LandAfter {...props} />
    }
}

const App = props => (
    <Router>
        <div className='root-content'>
            <Route path={`/login`} component={Login} />
            <Route path={`/yuan`} component={ProtectPage} />
        </div>
    </Router>
)


export default App