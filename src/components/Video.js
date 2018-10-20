import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import ChartList from './ChartList';
class FetchJsonp extends Component {
    state = {
        list: []
    }
    getData() {
        //获取数据
        fetchJsonp('http://v.duba.com/commonapi/tvplay2level/')
            .then(function (response) {
                return response.json()
            }).then((json) => {
                console.log(json.videoshow.videos);
                this.setState({
                    list: json.videoshow.videos
                })
                global.videos = json.videoshow.videos;
                sessionStorage.setItem('videoList', JSON.stringify(json.videoshow.videos));
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
    componentDidMount() {
        this.getData();
    }
    getDetailsDate(id) {
        console.log(id);
    }
    render() {
        return (
            <div>
                <h2 className='text-align'>热门视频</h2>
                <List
                    style={{ paddingTop: '10px' }}
                    bordered
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item onClick={this.getDetailsDate.bind(this, item.id)}>
                        <Link to={`/yuan/VideoDetails/${item.id}`}> {item.title}</Link>
                    </List.Item>)}
                />

                <hr />
                <h2 className='text-align'>视频列表</h2>
                {/* img  图片字段   title  标题字段   details  详情字段   */}
                <ChartList chartList={this.state.list} img="imgv_url" title="title" details="intro" />
            </div>
        );
    }
}
export default FetchJsonp;