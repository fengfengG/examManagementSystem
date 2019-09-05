import React, { Component } from 'react'
import { Table } from 'antd';
import { insertQuestion } from '@/api/api'

const { Column } = Table;
class insertQuestionType extends Component {
	state = {
		data: [],
		course: []
	}
	componentDidMount() {
		insertQuestion().then(res => {
			console.log(res.data.result, 'aaa')
			this.setState({
				data: res.data.result
			})
		})
	}
	render() {
		const { data } = this.state
		console.log(data)
		return <div>this is insertQuestionType page
		  <Table dataSource={ data }>
				<Column title="类型ID" dataIndex="questions_type_id" key="questions_type_id" />
				<Column title="类型名称" dataIndex="questions_type_name" key="questions_type_name" />
				<Column title="操作" dataIndex="questions_type_sort" key="questions_type_sort" />
			</Table>
		</div>
	}
}
export default insertQuestionType


