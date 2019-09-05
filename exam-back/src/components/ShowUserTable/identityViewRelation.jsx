import React, { Component } from 'react'
import { Table } from 'antd'
import { getUserNameId } from '@/api/user'

const columns = [
	{
		title: '身份',
		dataIndex: 'type',
		key: 'type'
	},
	{
		title: '视图名称',
		dataIndex: 'view_authority_text',
		key: 'view_authority_text'
	},
	{
		title: '视图id',
		dataIndex: 'view_id',
		key: 'view_id'
	}
]

class IdentityViewRelation extends Component {
	state = {
		data: []
	}
	render() {
		const { data } = this.state
		return (
			<div>
				<h2 style={{ marginBottom: 20 }}>身份和视图权限关系</h2>
				<Table columns={columns} dataSource={data} />
			</div>
		)
	}
	componentDidMount() {
		getUserNameId().then(res => {
			const result = res.data
			result.map(item => {
				item.key = item.view_authority_text
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

export default IdentityViewRelation
