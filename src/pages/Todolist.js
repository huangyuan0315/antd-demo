import React, { Component } from 'react';
import '../assets/css/todolist.css';
import { Icon } from 'antd';
class Todolist extends Component {
    state = {
        list: [
            // {
            //     title:'录制ionic',
            //     checked:true
            // }
        ]
    }
    addData = (e) => {
        //按下回车的时候在增加
        if (e.keyCode === 13) {
            // alert(title);
            let title = this.refs.title.value;
            let tempList = this.state.list;
            tempList.push({
                title: title,
                checked: false //false 待办 true 已完成
            })
            //改变后的值赋值给list
            this.setState({
                list: tempList
            })
            //表单置为空
            this.refs.title.value = '';
            //执行缓存数据
            localStorage.setItem('todolist', JSON.stringify(tempList));
        }
    }
    checkboxChage = (key) => {
        // alert('111');
        let tempList = this.state.list;
        tempList[key].checked = !tempList[key].checked;
        this.setState({
            list: tempList
        })
        //执行缓存数据
        localStorage.setItem('todolist', JSON.stringify(tempList));
    }
    removeData = (key) => {
        let tempList = this.state.list;
        tempList.splice(key, 1);
        this.setState({
            list: tempList
        })
        //执行缓存数据
        localStorage.setItem('todolist', JSON.stringify(tempList));
    }
    //生命周期函数  页面加载就会触发
    componentDidMount() {
        //获取缓存的数据
        var todolist = JSON.parse(localStorage.getItem('todolist'));   /*字符串*/
        if (todolist) {
            this.setState({
                list: todolist
            })
        }
    }
    render() {
        return (
            <div>
                <header className="todo-list-title">
                    <div className='todo'> <span>TodoList</span>
                        <input ref="title" onKeyUp={this.addData} />
                    </div>
                </header>
                <div className='todo'>
                    <h2 className='todo-list-h2'>待办事项</h2>
                    <hr />
                    <ul className='todo-list'>
                        {
                            this.state.list.map((value, key) => {
                                return (
                                    !value.checked ? <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChage.bind(this, key)} />
                                        {value.title}
                                        -- <Icon className='todo-list-icon' type='minus-circle' onClick={this.removeData.bind(this, key)}></Icon>
                                    </li> : ''
                                )
                            })
                        }
                    </ul>
                    <h2 className='todo-list-h2'>已完成事项</h2>
                    <hr />
                    <ul className='todo-list-complete'>
                        {
                            this.state.list.map((value, key) => {
                                return (
                                    value.checked ? <li key={key}>
                                        <input type="checkbox" checked={value.checked} onChange={this.checkboxChage.bind(this, key)} />
                                        {value.title}
                                        -- <Icon className='todo-list-icon' type='minus-circle' onClick={this.removeData.bind(this, key)}></Icon>
                                    </li> : ''
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
export default Todolist;