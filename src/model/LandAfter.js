import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Icon } from 'antd';
import routes from './routes';
import './config';
class LandAfter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '/yuan/home',
        }
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    componentDidMount() {
        const strUrl = this.props.location.pathname.split("/");
        const strUrlast = strUrl[strUrl.length - 1];
        console.log(strUrlast)
        this.setState({
            current: '/yuan/' + strUrlast
        });
    }
    // 登出逻辑
    signOut = () => {
        // 清空登录信息后，记得再重定向一次
        localStorage.removeItem('LAND');
        this.props.history.push(`/login`)
    }
    render() {
        return (
            <Router>
                <div style={{ width: '100%' }}>
                    <Menu style={{ display: 'flex', justifyContent: 'center' }}
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        {
                            routes.map((route, key) => {
                                return route.name !== 'VideoDetails' ? <Menu.Item key={route.path}>
                                    <Link to={route.path}> <Icon type="mail" />{route.name}</Link >
                                </Menu.Item> : ''
                            })
                        }
                        <Menu.Item key="/out" className='out'>
                            <Icon type='logout' onClick={this.signOut} />
                        </Menu.Item>
                    </Menu>
                    <div>
                        {
                            routes.map((route, key) => {
                                return <Route key={key} exact={route.exact ? route.exact : false} path={route.path}
                                    render={props => (
                                        <route.component {...props} routes={route.routes} />
                                    )}
                                />
                            })
                        }
                    </div>
                </div>
            </Router >
        );
    }
}
export default LandAfter;
