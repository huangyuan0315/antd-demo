import React, { Component } from 'react';
/*
约束性和非约束性组件:
      非约束性组:<input type="text" defaultValue="a" />   这个 defaultValue 其实就是原生DOM中的 value 属性。
      这样写出的来的组件，其value值就是用户输入的内容，React完全不管理输入的过程。
      约束性组件：<input value={this.state.username} type="text" onChange={this.handleUsername}  /> 
              这里，value属性不再是一个写死的值，他是 this.state.username, this.state.username 是由 this.handleChange 负责管理的。
              这个时候实际上 input 的 value 根本不是用户输入的内容。而是onChange 事件触发之后，由于 this.setState 导致了一次重新渲染。不过React会优化这个渲染过程。看上去有点类似双休数据绑定
*/
class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "react表单",
            name: '',
            sex: 1,
            city: '',
            citys: [
                '北京', '上海', '深圳'
            ],
            hobby: [
                {
                    'title': "睡觉",
                    'checked': true
                },
                {
                    'title': "吃饭",
                    'checked': false
                },
                {
                    'title': "敲代码",
                    'checked': true
                }
            ],
            info: ''
        };
        this.handleInfo = this.handleInfo.bind(this);
    }
    handelSubmit = (e) => {
        //阻止submit的提交事件
        e.preventDefault();
        console.log(this.state.name, this.state.sex, this.state.city, this.state.hobby, this.state.info);
    }
    handelName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handelSex = (e) => {
        this.setState({
            sex: e.target.value
        })
    }
    handelCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    handelHobby = (key) => {
        var hobby = this.state.hobby;
        hobby[key].checked = !hobby[key].checked;
        this.setState({
            hobby: hobby
        })
    }
    handleInfo(e) {
        this.setState({
            info: e.target.value
        })
    }
    render() {
        return (
            <div style={{ marginLeft: '100px' }}>
                <h2>{this.state.msg}</h2>
                <form onSubmit={this.handelSubmit}>
                    用户名:  <input type="text" value={this.state.name} onChange={this.handelName} /> <br /><br />
                    性别:    <input type="radio" value="1" checked={this.state.sex === 1} onChange={this.handelSex} />男
                            <input type="radio" value="2" checked={this.state.sex === 2} onChange={this.handelSex} />女 <br /><br />
                    居住城市:
                        <select value={this.state.city} onChange={this.handelCity}>
                        {
                            this.state.citys.map(function (value, key) {
                                return <option key={key}>{value}</option>
                            })
                        }
                    </select>
                    <br /><br />
                    爱好:
                    {
                        // 注意this指向
                        this.state.hobby.map((value, key) => {
                            return (
                                <span key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={this.handelHobby.bind(this, key)} /> {value.title}
                                </span>
                            )
                        })
                    }
                    <br /><br />
                    备注：<textarea vlaue={this.state.info} onChange={this.handleInfo} />
                    <br /><br />
                    <input type="submit" defaultValue="提交" />
                    <br /><br /> <br /><br />
                </form>
            </div>
        );
    }
}
export default Forms;
