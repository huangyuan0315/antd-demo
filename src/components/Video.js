import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { List } from 'antd';
import { Link } from 'react-router-dom';
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
                        <Link to={`/VideoDetails/${item.id}`}> {item.title}</Link>
                    </List.Item>)}
                />
            </div>
        );
    }
}
export default FetchJsonp;