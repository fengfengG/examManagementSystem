import React, { Component } from 'react'
import { Tabs } from 'antd'
import UserData from '@/components/ShowUserTable/userData'
import TypeData from '@/components/ShowUserTable/typeData'
import ApiAuthority from '@/components/ShowUserTable/apiAuthority'
import IdentityApiRelation from '@/components/ShowUserTable/identityApiRelation'
import ViewAuthority from '@/components/ShowUserTable/viewAuthority'
import IdentityViewRelation from '@/components/ShowUserTable/identityViewRelation'

const { TabPane } = Tabs

class ShowUser extends Component {
	render() {
		return (
			<Tabs defaultActiveKey='1' className='showUser'>
				<TabPane tab='用户数据' key='1'>
					<UserData />
				</TabPane>
				<TabPane tab='身份数据' key='2'>
					<TypeData />
				</TabPane>
				<TabPane tab='api接口权限' key='3'>
					<ApiAuthority />
				</TabPane>
				<TabPane tab='身份和api接口关系' key='4'>
					<IdentityApiRelation />
				</TabPane>
				<TabPane tab='视图接口权限' key='5'>
					<ViewAuthority />
				</TabPane>
				<TabPane tab='身份和视图权限关系' key='6'>
					<IdentityViewRelation />
				</TabPane>
			</Tabs>
		)
	}
}

export default ShowUser
