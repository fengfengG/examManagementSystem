import React, { Component } from 'react';
import { Layout, Button, Table, Modal, Divider, Form, Select, Input, Popconfirm } from 'antd';
import { addClass, classlist, getClassSize, getCourse, deleClass } from '@/api/class';

const { Column } = Table;
const { Option } = Select;
const { Content } = Layout;

@Form.create({ name: 'coordinated' })

class Grade extends Component {
	state = {
		data: [], // 所有数据
		room: [], // 教室号
		course: [], // 课程名
		visible: false
	};

	componentDidMount() {
		classlist().then(res => {
			this.setState({
				//所有数据
				data: res.data.result
			});
		});
	}

	//弹框显示
	showModal = () => {
		this.setState({
			visible: true
		});
		getClassSize().then(res => {
			this.setState({
				room: res.data.result
			})
		})
		getCourse().then(res => {
			this.setState({
				course: res.data.result
			})
		})
	};

	handleOk = e => {

		this.props.form.validateFields((err, values) => {
			console.log(err, 'values')
			if (!err) {
				//全部填入后关闭弹框
				this.setState({
					visible: false
				});
				//点击提交后将数据提交后台
				addClass(values);
				//重新获取数据
				classlist().then(res => {
					this.setState({
						//所有数据
						data: res.data.result
					});
				});
			}
		});
		// 
	};

	handleCancel = e => {
		this.setState({
			visible: false
		});
		//点击返回清空表中的数据
		this.props.form.validateFields((err, values) => {

		})
	};

	//修改教室
	handleUpde(record) {
		console.log(record, '修改');
		this.setState({
			visible: true
		});
		this.props.form.validateFields((err, values) => {
			console.log(values, 'values')
			// values = record
		})
	}
	//删除教室
	handleDeltet(record) {
		console.log(record, '删除')
		deleClass(record.cid)
		//删除完后重新获取数据
		classlist().then(res => {
			this.setState({
				//所有数据
				data: res.data.result
			});
		});
	}
	//点击取消
	cancelFn(record) {
		// console.log('取消删除功能')
	}
	//点击确定
	confirmFn(record) {
		this.handleDeltet(record)
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const { data, room, course } = this.state;
		return (
			<Layout>
				<Content className='room-content'>
					<div className='room-title'>
						<Button
							type='primary'
							icon='plus'
							onClick={ this.showModal }>
							添加班级
						</Button>
						<Modal
							title='添加班级'
							visible={ this.state.visible }
							onOk={ this.handleOk }
							onCancel={ this.handleCancel }>
							<Form
								labelCol={ { span: 5 } }
								wrapperCol={ { span: 12 } }
								onSubmit={ this.handleSubmit }>
								<Form.Item label='班级名' hasFeedback={ true }>
									{
										getFieldDecorator('className', {
											rules: [{ required: true, message: '班级名' }]
										})(<Input />)
									}
								</Form.Item>
								<Form.Item label='教室号' hasFeedback={ true }>
									{
										getFieldDecorator('classSize', { rules: [{ required: true, message: '请选择教室号' }] })(
											<Select placeholder='请选择教室号'>
												{ room && room.map(item => {
													return (
														<Option
															key={ item.cid }
															value={ item.classSize }>
															{ item.classSize }
														</Option>
													);
												}) }
											</Select>
										)
									}
								</Form.Item>
								<Form.Item label='课程名' hasFeedback={ true }>
									{ getFieldDecorator('courseName', { rules: [{ required: true, message: '请选择课程名字' }] })(
										<Select placeholder='课程名'>
											{ course && course.map(item => {
												return (
													<Option
														key={ item.cid }
														value={ item.courseName }>
														{ item.courseName }
													</Option>
												);
											}) }
										</Select>
									) }
								</Form.Item>
							</Form>
						</Modal>
					</div>

					<Table dataSource={ data } rowKey={ data => data.cid }>
						<Column
							title='班级名'
							dataIndex='className'
							key='className'
						/>
						<Column
							title='课程名'
							dataIndex='courseName'
							key='courseName'
						/>
						<Column
							title='教室号'
							dataIndex='classSize'
							key='classSize'
						/>
						<Column
							title='操作'
							key='action'
							render={ (text, record) => (
								<div>
									<a
										onClick={ () => this.handleUpde(record) }>
										修改
									</a>
									<Divider type='vertical' />
									<Popconfirm
										title="Are you sure？"
										okText="Yes"
										cancelText="No"
										onCancel={ () => this.cancelFn(record) }
										onConfirm={ () => this.confirmFn(record) }
									>
										<a href="#">删除</a>
									</Popconfirm>

								</div>
							) }
						/>
					</Table>
				</Content>
			</Layout>
		);
	}
}

export default Grade;
