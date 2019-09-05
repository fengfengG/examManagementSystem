import React, { Component } from 'react'
import { Table } from 'antd'
import { getUserNameId } from '@/api/user'

const columns = [
	{
		title: '身份名称',
		dataIndex: 'type',
		key: 'type'
	},
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

class IdentityApiRelation extends Component {
	state = {
		data: []
	}
	render() {
		const { data } = this.state
		return (
			<div>
				<h2 style={{ marginBottom: 20 }}>身份和api接口关系</h2>
				<Table columns={columns} dataSource={data} />
			</div>
		)
	}
	componentDidMount() {
		getUserNameId().then(res => {
			const result = res.data
			result.map(item => {
				item.key = item.api_authority_text
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

export default IdentityApiRelation
