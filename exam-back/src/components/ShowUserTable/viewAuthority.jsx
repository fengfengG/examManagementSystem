import React, { Component } from 'react'
import { Table } from 'antd'
import { getViewAuthority } from '@/api/user'

const columns = [
	{
		title: '视图权限名称',
		dataIndex: 'view_authority_text',
		key: 'view_authority_text'
	},
	{
		title: '视图id',
		dataIndex: 'view_id',
		key: 'view_id'
	}
]

class ViewAuthority extends Component {
	state = {
		data: []
	}
	render() {
		const { data } = this.state
		return (
			<div>
				<h2 style={{ marginBottom: 20 }}>视图接口权限</h2>
				<Table columns={columns} dataSource={data} />
			</div>
		)
	}
	componentDidMount() {
		getViewAuthority().then(res => {
			const result = res.data
			result.map(item => {
				item.key = item.view_authority_text
				return item
			})
			this.setState({
				data: result
			})
		})
	}
}

export default ViewAuthority
