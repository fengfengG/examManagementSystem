import React, { Component } from 'react'
import { Redirect } from 'dva/router'

const LoginHoc = Wrap =>
	class extends Component {
		render() {
			return window.sessionStorage.getItem('token')
				? (<Wrap { ...this.props } />) : (<Redirect to='/login' />)
		}
	}

export default LoginHoc
