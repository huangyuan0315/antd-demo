import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login';
import LandAfter from './LandAfter';
export default class LoginConfig extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={LandAfter} />
                    {/* <Redirect to='/login' /> */}
                </div>
            </Router>
        )
    }
}
