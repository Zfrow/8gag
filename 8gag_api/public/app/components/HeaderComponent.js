import React, { Component } from 'react'

class HeaderComponent extends Component {
	render() {
		const style={
			fontStyle:'verdana',
			color:'red'
		}
		return(
			<div style={style}>
				<h2>{this.props.heading}</h2>
			</div>
		)
	}
}

export default HeaderComponent