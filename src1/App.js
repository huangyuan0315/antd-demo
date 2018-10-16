
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './assets/css/index.css';

import routes from './model/router.js';

class App extends Component {

  render() {
    return (

      <Router>
        <div>
          <header className="title">
            <Link to="/">首页组件</Link>
            <Link to="/user">用户页面</Link>
            <Link to="/shop">商户</Link>
            <Link to="/news">新闻</Link>
          </header>


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
      </Router>
    );
  }
}

export default App;
