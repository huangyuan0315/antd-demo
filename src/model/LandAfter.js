import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Icon } from 'antd';
import routes from './routes';
import './config';
class LandAfter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '/',
        }
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    componentDidMount() {
        const strUrl = window.location.href.split("/");
        const strUrlast = strUrl[strUrl.length - 1];
        this.setState({
            current: '/' + strUrlast
        });
        console.log(strUrl, this.state.current);
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
                        <Menu.Item key="/">
                            <Link to={`/`}> <Icon type="mail" />HOME</Link >
                        </Menu.Item>
                        <Menu.Item key="/users">
                            <Link to={`/users`}> <Icon type="appstore" />USERS</Link >
                        </Menu.Item>
                        <Menu.Item key="/about">
                            <Link to={`/about`}> <Icon type="arrow-right" />ABOUT</Link >
                        </Menu.Item>
                        <Menu.Item key="/news">
                            <Link to={`/news`}> <Icon type="solution" />NEWS</Link >
                        </Menu.Item>
                        <Menu.Item key="/forms">
                            <Link to={`/forms`}> <Icon type="form" />FROM</Link >
                        </Menu.Item>
                        <Menu.Item key="/todolist">
                            <Link to={`/todolist`}> <Icon type="ordered-list" />TODOLIST</Link >
                        </Menu.Item>
                        <Menu.Item key="/out" className='out'>
                            <Icon type='logout' onClick={this.props.out} />
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
