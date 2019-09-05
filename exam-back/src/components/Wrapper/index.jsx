import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { NavLink } from 'dva/router'

const { Sider, Content } = Layout
const { SubMenu } = Menu

class Wrapper extends Component {
	state = {
		collapsed: false
	}
	onCollapse = collapsed => {
		this.setState({
			collapsed
		})
	}
	render() {
		return (
			<div>
				<div className='wrapper-header'>
					<img
						className='wrapper-header-img'
						src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg'
						alt=''
					/>
					<div className='wrapper-header-right'>
						<span className='wrapper-header-icon'></span>
						<span>heinan</span>
					</div>
				</div>
				<Layout style={ { minHeight: '100vh' } }>
					<Sider
						style={ {
							overflow: 'auto',
							height: '100vh',
							position: 'fixed',
							left: 0
						} }
						collapsible
						collapsed={ this.state.collapsed }
						onCollapse={ this.onCollapse }>
						<div className='logo' />
						<Menu theme='dark' defaultSelectedKeys={ ['1'] } mode='inline'>
							<SubMenu
								key='sub1'
								title={
									<span>
										<Icon type='sliders' />
										<span>试题管理</span>
									</span>
								}>
								<Menu.Item key='3'>
									<NavLink to='/home/questions'>添加试题</NavLink>
								</Menu.Item>
								<Menu.Item key='4'>
									<NavLink to='/home/insertQuestionsType'>试题分类</NavLink>
								</Menu.Item>
								<Menu.Item key='5'>
									<NavLink to='/home/showQuestions'>查看试题</NavLink>
								</Menu.Item>
							</SubMenu>
							<SubMenu
								key='sub2'
								title={
									<span>
										<Icon type='user' />
										<span>用户管理</span>
									</span>
								}>
								<Menu.Item key='6'>
									<NavLink to='/user/addUser'>添加用户</NavLink>
								</Menu.Item>
								<Menu.Item key='7'>
									<NavLink to='/user/showUser'>用户展示</NavLink>
								</Menu.Item>
							</SubMenu>
							<SubMenu
								key='sub3'
								title={
									<span>
										<Icon type='schedule' />
										<span>考试管理</span>
									</span>
								}>
								<Menu.Item key='8'>
									<NavLink to='/manage/addExam'>添加考试</NavLink>
								</Menu.Item>
								<Menu.Item key='9'>
									<NavLink to='/manage/paperList'>试卷列表</NavLink>
								</Menu.Item>
							</SubMenu>
							<SubMenu
								key='sub4'
								title={
									<span>
										<Icon type='project' />
										<span>班级管理</span>
									</span>
								}>
								<Menu.Item key='10'>
									<NavLink to='/class/classManage'>班级管理</NavLink>
								</Menu.Item>
								<Menu.Item key='11'>
									<NavLink to='/class/roomManage'>教室管理</NavLink>
								</Menu.Item>
								<Menu.Item key='12'>
									<NavLink to='/class/studentManage'>学生管理</NavLink>
								</Menu.Item>
							</SubMenu>
							<SubMenu
								key='sub5'
								title={
									<span>
										<Icon type='project' />
										<span>阅卷管理</span>
									</span>
								}>
								<Menu.Item key='13'>
									<NavLink to='/wait/classAwit'>待批班级</NavLink>
								</Menu.Item>
							</SubMenu>
						</Menu>
					</Sider>
					<Layout style={ { marginLeft: 200 } }>
						<header style={ { fontSize: '23px', padding: '25px 0px 5px 15px' } }>
							标题分类
						</header>
						<Content
							style={ {
								margin: '24px 16px',
								padding: 24,
								background: '#fff',
								borderRadius: '10px',
								minHeight: 280
							} }>
							{ this.props.children }
						</Content>
					</Layout>
				</Layout>
			</div>
		)
	}
}

export default Wrapper
