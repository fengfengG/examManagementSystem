import React, { Component } from 'react'

class Wait extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return <div>{this.props.children}</div>
	}
}

export default Wait
