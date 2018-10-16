import React from 'react';
import { Form, Icon, Input, Checkbox } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                return true
            } else {
                return false
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='login'>
                <Form onSubmit={this.handleSubmit ? this.props.land : ''} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
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