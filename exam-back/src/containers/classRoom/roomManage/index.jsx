import React, { Component } from 'react';
import { Layout, Button, Table, Modal, Form, Input } from 'antd';
import { roomlist, deleRoom, addRoom } from '@/api/class';

const { Column } = Table;
const { Content } = Layout;

@Form.create({ name: 'coordinated' })

class Grade extends Component {
	state = {
		data: [], // 所有数据
		visible: false
	};

	componentDidMount() {
		roomlist().then(res => {
			this.setState({
				//所有数据
				data: res.data.result
			});
		});
	}

	showModal = () => {
		this.setState({
			visible: true
		});
	};

	handleOk = e => {
		this.setState({
			visible: false
		});
		this.props.form.validateFields((err, values) => {
			if (!err) {
				//点击提交后将数据提交后台
				addRoom(values);
				//重新获取数据
				roomlist().then(res => {
					this.setState({
						//所有数据
						data: res.data.result
					});
				});
			}
		});
	};

	handleCancel = e => {
		this.setState({
			visible: false
		});
	};

	//修改教室
	handleUpde(record) {
		console.log(record, '修改');
	}
	//删除教室
	handleDeltet(record) {
		console.log(record, '删除')
		deleRoom(record.mid)
		//删除完后重新获取数据
		roomlist().then(res => {
			this.setState({
				//所有数据
				data: res.data.result
			});
		});
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const { data } = this.state;
		return (
			<Layout>
				<Content className='room-content'>
					<div className='room-title'>
						<Button
							type='primary'
							icon='plus'
							onClick={ this.showModal }>
							添加教室
						</Button>
						<Modal
							title='添加教室'
							visible={ this.state.visible }
							onOk={ this.handleOk }
							onCancel={ this.handleCancel }>
							<Form
								labelCol={ { span: 5 } }
								wrapperCol={ { span: 12 } }
							>
								<Form.Item label='教室号'>
									{
										getFieldDecorator('classSize', {
											rules: [{ required: true, message: '教室号' }]
										})(<Input />)
									}
								</Form.Item>
							</Form>
						</Modal>
					</div>

					<Table dataSource={ data } rowKey={ data => data.cid }>
						<Column
							title='教室号'
							dataIndex='size'
							key='mid'
						/>
						<Column
							title='操作'
							key='action'
							render={ (text, record) => (
								<div>
									<span
										onClick={ () =>
											this.handleDeltet(record)
										}>
										删除
									</span>
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
