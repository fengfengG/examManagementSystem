import React, { Component } from 'react'

import { Row, Col, Form, Select, Input, Button, Radio, message } from 'antd'
import {
	addUser,
	getUserNameId,
	updateUser,
	getApiAuthority,
	getViewAuthority
} from '@/api/user'
import '@/assets/css/adduser.css'

const { Option } = Select

@Form.create()
class AddUser extends Component {

	state = {
		formLayout: 'horizontal',
		nameIdList: [],
		apiAuthority: [],
		viewAuthority: []
	}
	handleFormLayoutChange = e => {
		this.setState({ formLayout: e.target.value })
	}
	//添加、更新用户
	handleSubmit = e => {
		const { formLayout } = this.state
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				if (formLayout === 'vertical') {
					updateUser(values).then(res => {
						if (res.status === 200) {
							message.success('用户更新成功')
						}
					})
				} else {
					addUser(values).then(res => {
						if (res.status === 200) {
							message.success('用户添加成功')
						}
					})
					this.getData()
				}
			}
		})
	}
	//重置
	handleReset = () => {
		this.props.form.resetFields()
	}
	render() {
		const { formLayout, nameIdList, apiAuthority, viewAuthority } = this.state
		const { getFieldDecorator } = this.props.form
		return (
			<div className='adduser'>
				<Row>
					<Col span={ 8 }>
						<Form
							onSubmit={ this.handleSubmit }
							className='adduser-form'
							layout={ formLayout }>
							<Form.Item>
								<Radio.Group
									defaultValue='horizontal'
									onChange={ this.handleFormLayoutChange }>
									<Radio.Button value='horizontal'>添加用户</Radio.Button>
									<Radio.Button value='vertical'>更新用户</Radio.Button>
								</Radio.Group>
							</Form.Item>
							{ formLayout === 'vertical' ? (
								<Form.Item>
									{ getFieldDecorator('nameId')(
										<Select placeholder='请选择身份id' style={ { width: 150 } }>
											{ nameIdList.map(item => (
												<Option key={ item.id } value={ item.username }>
													{ item.username }
												</Option>
											)) }

										</Select>
									) }
								</Form.Item>
							) : null }
							<Form.Item>
								{ getFieldDecorator('username')(
									<Input placeholder='请输入用户名' />
								) }
							</Form.Item>
							<Form.Item>
								{ getFieldDecorator('password')(
									<Input placeholder='请输入密码' />
								) }
							</Form.Item>
							<Form.Item>
								{ getFieldDecorator('typeId')(
									<Select placeholder='请选择身份id' style={ { width: 150 } }>
										<Option value={ 0 }>管理员</Option>
										<Option value={ 1 }>出题者</Option>
										<Option value={ 2 }>浏览者</Option>
									</Select>
								) }
							</Form.Item>
							<Form.Item>
								<Button
									type='primary'
									htmlType='submit'
									style={ { marginRight: 10, width: 112 } }>
									确定
								</Button>
								<Button onClick={ this.handleReset }>重置</Button>
							</Form.Item>
						</Form>
					</Col>
					<Col span={ 8 }>
						<Form className='adduser-form'>
							<Form.Item>
								<Radio.Group>
									<Radio.Button>添加身份</Radio.Button>
								</Radio.Group>
							</Form.Item>
							<Form.Item>
								<Input placeholder='请输入身份名称' />
							</Form.Item>
							<Form.Item>
								<Button type='primary' style={ { marginRight: 10, width: 112 } }>
									确定
								</Button>
								<Button>重置</Button>
							</Form.Item>
						</Form>
					</Col>
					<Col span={ 8 } className='adduser-right'>
						<Form className='adduser-form'>
							<Form.Item>
								<Radio.Group>
									<Radio.Button>添加api接口权限</Radio.Button>
								</Radio.Group>
							</Form.Item>
							<Form.Item>
								<Input placeholder='请输入api接口权限名称' />
							</Form.Item>
							<Form.Item>
								<Input placeholder='请输入api接口权限url' />
							</Form.Item>
							<Form.Item>
								<Input placeholder='请输入api接口权限方法' />
							</Form.Item>
							<Form.Item>
								<Button type='primary' style={ { marginRight: 10, width: 112 } }>
									确定
								</Button>
								<Button>重置</Button>
							</Form.Item>
						</Form>
					</Col>
				</Row>
				<Row className='adduser-bottom'>
					<Col span={ 8 }>
						<Form className='adduser-form'>
							<Form.Item>
								<Radio.Group>
									<Radio.Button>添加视图接口权限</Radio.Button>
								</Radio.Group>
							</Form.Item>
							<Form.Item>
								<Select placeholder='请选择已有视图' style={ { width: 150 } }>
									{ viewAuthority.map(item => (
										<Option key={ item.id } value={ item.view_authority_text }>
											{ item.view_authority_text }
										</Option>
									)) }
								</Select>
							</Form.Item>
							<Form.Item>
								<Button type='primary' style={ { marginRight: 10, width: 112 } }>
									确定
								</Button>
								<Button>重置</Button>
							</Form.Item>
						</Form>
					</Col>
					<Col span={ 8 }>
						<Form className='adduser-form'>
							<Form.Item>
								<Radio.Group>
									<Radio.Button>给身份设置api接口权限</Radio.Button>
								</Radio.Group>
							</Form.Item>
							<Form.Item>
								<Select placeholder='请选择身份id' style={ { width: 150 } }>
									<Option value={ 0 }>管理员</Option>
									<Option value={ 1 }>出题者</Option>
									<Option value={ 2 }>浏览者</Option>
								</Select>
							</Form.Item>
							<Form.Item>
								<Select placeholder='请选择api接口权限' style={ { width: 150 } }>
									{ apiAuthority.map(item => (
										<Option key={ item.id } value={ item.api_authority_text }>
											{ item.api_authority_text }
										</Option>
									)) }
								</Select>
							</Form.Item>
							<Form.Item>
								<Button type='primary' style={ { marginRight: 10, width: 112 } }>
									确定
								</Button>
								<Button>重置</Button>
							</Form.Item>
						</Form>
					</Col>
					<Col span={ 8 } className='adduser-right'>
						<Form className='adduser-form'>
							<Form.Item>
								<Radio.Group>
									<Radio.Button>给身份设置视图权限</Radio.Button>
								</Radio.Group>
							</Form.Item>
							<Form.Item>
								<Select placeholder='请选择身份id' style={ { width: 150 } }>
									<Option value={ 0 }>管理员</Option>
									<Option value={ 1 }>出题者</Option>
									<Option value={ 2 }>浏览者</Option>
								</Select>
							</Form.Item>
							<Form.Item>
								<Select placeholder='请选择视图权限id' style={ { width: 150 } }>
									{ viewAuthority.map(item => (
										<Option key={ item.id } value={ item.view_authority_text }>
											{ item.view_authority_text }
										</Option>
									)) }
								</Select>
							</Form.Item>
							<Form.Item>
								<Button type='primary' style={ { marginRight: 10, width: 112 } }>
									确定
								</Button>
								<Button>重置</Button>
							</Form.Item>
						</Form>
					</Col>
				</Row>
			</div>
		)
	}
	componentDidMount() {
		this.getData()
	}
	getData() {
		getUserNameId().then(res => {
			this.setState({
				nameIdList: res.data
			})
		})
		getApiAuthority().then(res => {
			this.setState({
				apiAuthority: res.data
			})
		})
		getViewAuthority().then(res => {
			this.setState({
				viewAuthority: res.data
			})
		})
	}
}

export default Form.create({ name: 'normal_login' })(AddUser);

