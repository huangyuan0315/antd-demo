/*
父组件给子组件传值：
    defaultProps:父子组件传值中，如果父组件调用子组件的时候不给子组件传值，可以在子组件中使用defaultProps定义的默认值
    propTypes：验证父组件传值的类型合法性
            1、引入import PropTypes from 'prop-types';
            2、类.propTypes = {
                name: PropTypes.string
            };
    都是定义在子组件里面
https://reactjs.org/docs/typechecking-with-proptypes.html
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Text extends Component {
    state = {
        text: '新闻',
        name: '风云'
    }
    render() {
        const states = this.state;
        const prop = this.props;
        return (
            <div>
                <h2>
                    {states.text}
                    {prop.text ? (' -- ' + prop.text) : ''}
                </h2>
                {
                    this.props.funx ? <button onClick={() => this.props.funx(this.state.name)}>uyh</button> : ''
                }
            </div>
        )
    }
}
//defaultProps   如果父组件调用子组件的时候不给子组件传值，可以在子组件中使用defaultProps定义的默认值
Text.defaultProps = {
    text: '标题'
}
//同行propTypes定义父组件给子组件传值的类型
Text.propTypes = {
    text: PropTypes.string
}
