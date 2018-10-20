import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
class ChartList extends Component {
    render() {
        return (
            this.props.chartList.map((it, k) => {
                return <div className='list-detail' key={k}>
                    <div style={{ width: '200px' }}>
                        <img className='list-img' src={it.img} />
                    </div>
                    <div style={{ flex: 1, marginLeft: 20 }}>
                        <h3>{it.title}</h3>
                        <p>{it.details}</p>
                    </div>
                </div>
            })
        )
    }
}
class TextList extends Component {
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
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            })
    }
    componentDidMount() {
        this.getData();
    }
    render() {
        return (
            <div>
                <h2 className='text-align'>图文列表组件</h2>
                {/* img  图片字段   title  标题字段   details  详情字段   */}
                <ChartList chartList={
                    this.state.list.map(item => ({
                        img: item.imgv_url,
                        title: item.title,
                        details: item.intro,
                    }))
                } />
            </div>
        );
    }
}

export default TextList;