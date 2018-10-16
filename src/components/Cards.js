import React, { Component } from 'react'
import { Card, Button } from 'antd';

const { Meta } = Card;
export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Europe Street beat'
        };
        console.log('加载01');
    }
    componentWillMount() {
        console.log('加载02');
    }
    componentDidMount() {
        console.log('加载04');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        console.log('更新 --- shouldComponentUpdate')
        return true
    }
    componentWillUpdate() {
        console.log('更新 --- componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('更新 --- componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('组件销毁 --- componentWillUnmount')
    }
    componentWillReceiveProps() {
        console.log('父组件里面改变props传值的时候触发 --- componentWillReceiveProps')
    }
    setTitle = () => {
        this.setState({
            title: 'Europe Street beat ---refresh'
        })
    }
    render() {
        console.log('加载/更新03 --- render');
        return (
            <div style={{ textAlign: 'center' }}>
                <br />
                <Button onClick={this.setTitle}>更新 - TITLe</Button>
                <br /> <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card
                        title={this.props.cardTit}
                        hoverable
                        cover={<img alt="example" style={{ height: 400 }} src="http://pic4.qqmofasi.com/2014/09/15/418_Qb8z16160ed31813ku3R_large.jpg" />}
                    >
                        <Meta
                            title={this.state.title}
                            description="www.instagram.com"
                        />
                    </Card>
                </div>
            </div>
        )
    }
}

