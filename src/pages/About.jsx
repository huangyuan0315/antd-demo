import React, { Component } from 'react';
import { DatePicker, message } from 'antd';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      username: ''
    };
  }
  handleChange(date) {
    message.info('您选择的日期是: ' + (date ? date.toString() : ''));
    this.setState({ date });
  }
  changeUsername = () => {
    this.setState({
      username: this.refs.usernames.value
    });
    console.log(this.state.username);
  }
  render() {
    return (
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={value => this.handleChange(value)} />
        <div style={{ marginTop: 20 }}>当前日期：{this.state.date && this.state.date.toString()}</div>
        <br /><br />
        <label htmlFor="SSN">USERNAME</label>
        <input id="SSN" ref='usernames' onChange={this.changeUsername} />
      </div>
    );
  }
}
