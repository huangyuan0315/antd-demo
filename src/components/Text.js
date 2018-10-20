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
    text: PropTypes.string.isRequired
}


// Text.propTypes = {
//     // 数组
//     optionalArray: PropTypes.array,
//     // 布尔值
//     optionalBool: PropTypes.bool,
//     // 函数
//     optionalFunc: PropTypes.func,
//     // 数值
//     optionalNumber: PropTypes.number,
//     // 对象
//     optionalObject: PropTypes.object,
//     // 字符串
//     optionalString: PropTypes.string,
//     // symbol
//     optionalSymbol: PropTypes.symbol,
//     // 能够被渲染的数值，字符串，元素或者包含这些类型的数组
//     optionalNode: PropTypes.node,
//     // React元素
//     optionalElement: PropTypes.element,
//     // optionalMessage是Message类的实例
//     optionalMessage: PropTypes.instanceOf(Message),
//     // optionalEnum为['News', 'Photos']中的其中一个
//     optionalEnum: PropTypes.oneOf(['News', 'Photos']),
//     //optionalUnion要么为字符串，要么为数值，要么为Message实例
//     optionalUnion: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number,
//         PropTypes.instanceOf(Message)
//     ]),
//     // optionalArrayOf是数值类型的数组
//     optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
//     // optionalObjectOf的属性是数值
//     optionalObjectOf: PropTypes.objectOf(PropTypes.number),
//     // requiredFunc是函数，且必须提供。isRequired可以链接到任何值后面
//     requiredFunc: PropTypes.func.isRequired,
//     // requiredAny可以是任何类型，且必须提供
//     requiredAny: PropTypes.any.isRequired
// }
