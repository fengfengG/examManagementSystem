import React, { Component } from 'react'
import { Table } from 'antd'
import { getTypeList } from '@/api/user'

const columns = [
	{
		title: '身份名称',
		dataIndex: 'type_text',
		key: 'type_text'
	}
]

class TypeData extends Component {
	state = {
		data: []
	}
	render() {
		const { data } = this.state
		return (
			<div>
				<h2 style={{ marginBottom: 20 }}>身份数据</h2>
				<Table columns={columns} dataSource={data} />
			</div>
		)
	}
	componentDidMount() {
		getTypeList().then(res => {
			const result = res.data
			result.map(item => {
				item.key = item.type_text
				return item
			})
			this.setState({
				data: result
			})
		})
	}
}

export default TypeData
