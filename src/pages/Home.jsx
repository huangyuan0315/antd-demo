import React, { Component } from 'react';
import Video from '../components/Video';
export default class Welcome extends Component {
  state = {
    title: 'Welcome'
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Video />
      </div>
    );
  }
}
