import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import Login from './model/Login';
import LandAfter from './model/LandAfter';

import 'moment/locale/zh-cn';
moment.locale('zh-cn');

export default class App extends Component {
    state = {
        landState: true
    }
    login = () => {
        this.setState({
            landState: false
        })
    }
    out = () => {
        this.setState({
            landState: true
        })
    }
    render() {
        return (
            <LocaleProvider locale={zhCN}>
                {
                    this.state.landState ? < Login land={this.login} /> : <LandAfter out={this.out} />
                }
            </LocaleProvider>

        )
    }
}
