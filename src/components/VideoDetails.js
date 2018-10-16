import React, { Component } from 'react'
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
export default class VideoDetails extends Component {
    state = {
        details: {}
    }
    componentDidMount() {
        console.log(this.props.match.params);
        const videoList = global.videos.length > 0 ? global.videos : JSON.parse(sessionStorage.getItem('videoList'));
        videoList.map((it) => {
            return (
                it.id === this.props.match.params.aid ? this.setState({
                    details: it
                }) : ''
            )
        })
    }
    render() {
        console.log(this.state.details)
        return (
            <div className='video-detail'>
                <Row gutter={16} justify='center'>
                    <Col className="gutter-row" span={8}>
                        <div className="gutter-box" >
                            <img className='video-detail-img' src={`${this.state.details.imgv_url}`} /></div>
                    </Col>
                    <Col className="gutter-row" span={16}>
                        <div className="gutter-box">
                            <h3>{this.state.details.title}</h3>
                            <p>{this.state.details.intro}</p>
                            <Button><a href={this.state.details.player_url}>在线观看</a></Button>
                            <Link to={`/`}><Button style={{ marginLeft: 20 }} icon='step-backward'>返回视频列表</Button></Link>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
