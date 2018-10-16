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
                    <Link to="/news/">新闻</Link>
                    <br /> <br />
                    <Link to="/news/hotspot">热点</Link>
                    <br />
                    <br />
                    <Link to="/news/military">军事</Link>
                </div>
                <div>
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
