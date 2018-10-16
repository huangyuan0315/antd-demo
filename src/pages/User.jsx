import React, { Component } from 'react';
import { Button } from 'antd';
import UserItem from '../components/UserItem';
import Cards from '../components/Cards';
export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardTitlie: '枫叶',
      destroy: false
    };
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>I am the user list</h1>
        Example Nav - Example Nav
        <UserItem />
        <br />
        {
          this.state.destroy ? '' : <Cards cardTit={this.state.cardTitlie} />
        }
        <hr />
        <Button onClick={
          () => {
            this.setState({
              destroy: !this.state.destroy
            })
          }
        }>销毁 Card 组件</Button>
        <hr />
        <Button onClick={
          () => {
            this.setState({
              cardTitlie: '红色枫叶'
            })
          }
        }>改变Cards组件props传值 --- componentWillReceiveProps</Button>
      </div>
    );
  }
}
