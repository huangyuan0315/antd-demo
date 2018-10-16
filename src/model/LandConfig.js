import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandAfter from './LandAfter';

export default class LandConfig extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={LandAfter} />
                </div>
            </Router>
        )
    }
}
