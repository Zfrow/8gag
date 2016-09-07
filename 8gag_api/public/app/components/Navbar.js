import React, { Component } from 'react'

class Navbar extends Component {
	render() {
		const linkstyle={
			color:'orange'
		}
		console.log(this.props)
		return(
			<div>
				{this.props.navlinks.map(navlink=> <a style={linkstyle} href="#"><h4>{navlink.name}</h4></a>)}
			</div>
		)
	}
}

export default Navbar