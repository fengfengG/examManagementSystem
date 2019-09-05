import React, { Component } from 'react'
import { Table } from 'antd'
import { getApiAuthority } from '@/api/user'

const columns = [
	{
		title: 'api权限名称',
		dataIndex: 'api_authority_text',
		key: 'api_authority_text'
	},
	{
		title: 'api权限url',
		dataIndex: 'api_authority_url',
		key: 'api_authority_url'
	},
	{
		title: 'api权限方法',
		dataIndex: 'api_authority_method',
		key: 'api_authority_method'
	}
]

class ApiAuthority extends Component {
	state = {
		data: []
	}
	render() {
		const { data } = this.state
		return (
			<div>
				<h2 style={{ marginBottom: 20 }}>api接口权限</h2>
				<Table columns={columns} dataSource={data} />
			</div>
		)
	}
	componentDidMount() {
		getApiAuthority().then(res => {
			const result = res.data
			result.map(item => {
				item.key = item.api_authority_text
				return item
			})
			this.setState({
				data: result
			})
		})
	}
}

export default ApiAuthority
