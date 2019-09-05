import React, { Component } from 'react'
import { Input, Select, Modal, Button } from 'antd';
import E from 'wangeditor'
import Editor from 'for-editor'
import '@/assets/css/questions.css'

const { Option } = Select;
function onChange(value) {
	console.log(`selected ${value}`);
}

function onBlur() {
	console.log('blur');
}

function onFocus() {
	console.log('focus');
}

function onSearch(val) {
	console.log('search:', val);
}

class Questions extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editorContent: '',
			value: ''
		};
	}
	showModal = () => {
		this.setState({
			visible: true,
		});
	};

	handleOk = () => {
		this.setState({
			visible: true, 
			confirmLoading: true
		});
		setTimeout(() => {
			this.setState({
			  visible: false,
			  confirmLoading: false,
			});
		  }, 1000);
	};

	handleCancel = () => {
		this.setState({
			visible: false,
		});
	};

	componentDidMount() {
		const elemMenu = this.refs.editorElemMenu;
		const elemBody = this.refs.editorElemBody;
		const editor = new E(elemMenu, elemBody)
		editor.customConfig.onchange = html => {
			console.log(editor.txt.html())
			this.setState({
				editorContent: editor.txt.html()
			})
		}
		editor.customConfig.menus = [
			'head',  // 标题
			'bold',  // 粗体
			'fontSize',  // 字号
			'fontName',  // 字体
			'italic',  // 斜体
			'underline',  // 下划线
			'strikeThrough',  // 删除线
			'foreColor',  // 文字颜色
			'backColor',  // 背景颜色
			'link',  // 插入链接
			'list',  // 列表
			'justify',  // 对齐方式
			'quote',  // 引用
			'emoticon',  // 表情
			'image',  // 插入图片
			'table',  // 表格
			'video',  // 插入视频
			'code',  // 插入代码
			'undo',  // 撤销
			'redo'  // 重复
		]
		editor.customConfig.uploadImgShowBase64 = true
		editor.create()
	}
	render() {
		const { value, visible, confirmLoading } = this.state
		return <div className="Alls">
			<h4>题目信息</h4>
			<div className="top">
				<span>题干</span>
				<Input placeholder="请输入题目标题，不超过20个字" />
			</div>

			<div className="shop">
				<span>题目主题</span>
				<div className="text-area" >
					<div ref="editorElemMenu"
						style={{ backgroundColor: '#f1f1f1', border: "1px solid #ccc" }}
						className="editorElem-menu">
					</div>
					<div
						style={{
							padding: "0 10px",
							overflowY: "scroll",
							height: 300,
							border: "1px solid #ccc",
							borderTop: "none"
						}}
						ref="editorElemBody" className="editorElem-body">

					</div>
				</div>
			</div>
			<div className="Select-exam">
				<span>请选择考试类型:</span>
				<Select
					showSearch
					style={{ width: 200 }}
					placeholder="Select a person"
					optionFilterProp="children"
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					onSearch={onSearch}
					filterOption={(input, option) =>
						option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
					}
				>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="tom">Tom</Option>
				</Select>
			</div>
			<div className="Select-course">
				<span>请选择课程类型:</span>
				<Select
					showSearch
					style={{ width: 200 }}
					placeholder="Select a person"
					optionFilterProp="children"
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					onSearch={onSearch}
					filterOption={(input, option) =>
						option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
					}
				>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="tom">Tom</Option>
				</Select>

			</div>
			<div className="Select-topic">
				<span>请选择科目类型:</span>
				<Select
					showSearch
					style={{ width: 200 }}
					placeholder="Select a person"
					optionFilterProp="children"
					onChange={onChange}
					onFocus={onFocus}
					onBlur={onBlur}
					onSearch={onSearch}
					filterOption={(input, option) =>
						option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
					}
				>
					<Option value="jack">Jack</Option>
					<Option value="lucy">Lucy</Option>
					<Option value="tom">Tom</Option>
				</Select>
			</div>
			<div className="Full-screen">
				<Editor value={value} onChange={() => this.handleChange()} />
			</div>
			<div className="btns">
				<Button type="primary" onClick={this.showModal}>
					提交
		  </Button>
				<Modal
					title="你确定要添加吗"
					visible={visible}
					onOk={this.handleOk}
					confirmLoading={confirmLoading}
					onCancel={this.handleCancel}
				>
				</Modal>
			</div>
		</div>
	}
}

export default (Questions);
