import React from 'react';
import { Form, Icon, Input, Checkbox, message } from 'antd';
const FormItem = Form.Item;
// 登录页面，登录后，标记 userName
class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err && values.userName === "yuan" && values.password === "0315") {
                console.log('Received values of form: ', values);
                localStorage.setItem('LAND', values.userName)
                // 赋值后，记得再跳转一下（登录路径和私有页面的路径是不同的）
                console.log(this.props);
                this.props.history.push(`/yuan/home`);
            } else {
                message.error('登陆失败，用户名或密码错误！')
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login'>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="yuan" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="0315" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <input type='submit' autoFocus='autoFocus' className="ant-btn ant-btn-primary login-form-button" value='Log in' />
                        {/* <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button> */}
                    </FormItem>
                </Form>
            </div>
        );
    }
}
const Login = Form.create()(NormalLoginForm);

export default Login;