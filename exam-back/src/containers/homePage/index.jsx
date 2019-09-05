import React, { Component } from 'react'
import Wrapper from '@/components/Wrapper'
import LoginHoc from '@/utils/isLogin'

class HomePage extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return <Wrapper>{this.props.children}</Wrapper>
	}
}

export default LoginHoc(HomePage)
