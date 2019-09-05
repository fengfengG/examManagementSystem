import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Popconfirm, message } from 'antd'
import '@/assets/css/style.css'
import { userLogin } from '@/api/login'

@Form.create()
class Login extends Component {
	state = {}
	handleSubmit = e => {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log(values)
				userLogin(values).then(res => {
					window.sessionStorage.setItem('token', res.data.token)
					window.sessionStorage.setItem('uid', res.data.uid)
					this.props.history.push('/')
				})
			}
		})
	}

	render() {
		const { getFieldDecorator } = this.props.form
		return (
			<div className='login'>
				<div className='login-back'>
					<img src="https://www.tsinghua.edu.cn/publish/thu2018/12034/20190827164920653115589/20190830160334362373633.jpg" />
				</div>
				<Form onSubmit={ this.handleSubmit } className='login-form'>
					<Form.Item>
						{ getFieldDecorator('username', {
							initialValue: 'gf',
							rules: [{ required: true, message: '请输入用户名' }]
						})(
							<Input
								prefix={
									<Icon type='user' style={ { color: 'rgba(0,0,0,.25)' } } />
								}
								placeholder='请输入用户名'
							/>
						) }
					</Form.Item>
					<Form.Item>
						{ getFieldDecorator('password', {
							initialValue: '123321',
							rules: [{ required: true, message: '请输入用户密码' }]
						})(
							<Input
								prefix={
									<Icon type='lock' style={ { color: 'rgba(0,0,0,.25)' } } />
								}
								type='password'
								placeholder='请输入用户密码'
							/>
						) }
					</Form.Item>
					<Form.Item>
						{ getFieldDecorator('remember', {
							valuePropName: 'checked',
							initialValue: false
						})(<Checkbox>记住密码</Checkbox>) }
						<span className='login-form-forgot' style={ { color: '#1890ff' } }>
							忘记密码
						</span>
						<Button
							type='primary'
							htmlType='submit'
							className='login-form-button'>
							登陆
						</Button>
					</Form.Item>
				</Form>
			</div>
		)
	}
}

export default Login
