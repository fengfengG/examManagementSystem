import React, { Component } from 'react'
import { Table } from 'antd'
import { getUserNameId } from '@/api/user'

const columns = [
	{
		title: '用户名',
		dataIndex: 'username',
		key: 'username'
	},
	{
		title: '密码',
		dataIndex: 'password',
		key: 'password'
	},
	{
		title: '身份',
		dataIndex: 'type',
		key: 'type'
	}
]

class UserData extends Component {
	state = {
		data: []
	}
	render() {
		const { data } = this.state
		return (
			<div>
				<h2 style={{ marginBottom: 20 }}>用户数据</h2>
				<Table columns={columns} dataSource={data} />
			</div>
		)
	}
	componentDidMount() {
		getUserNameId().then(res => {
			const result = res.data
			result.map(item => {
				item.key = item.username
				item.type =
					item.type === 0 ? '管理员' : item.type === 1 ? '出题者' : '浏览者'
				return item
			})
			this.setState({
				data: result
			})
		})
	}
}

export default UserData
