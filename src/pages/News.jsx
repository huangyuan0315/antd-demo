import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是一个news组件'
        };
    }
    componentWillMount() {
        console.log(this.props.routes);
    }
    render() {
        return (
            <div className="content-new">
                <div className="left">
                    {
                        this.props.routes.map((route, key) => {
                            return <div className='content-new-nav' key={key} ><Link to={route.path}>{route.name}</Link></div>
                        })
                    }
                </div>
                <div className='right'>
                    {
                        this.props.routes.map((route, key) => {
                            return <Route key={key} exact path={route.path} component={route.component} />
                        })
                    }
                </div>
            </div>
        );
    }
}
export default News;
