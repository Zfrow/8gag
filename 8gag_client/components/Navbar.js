import React, { Component } from 'react'
import { Link } from 'react-router'

class Navbar extends Component {
  render() {
    const linkstyle={
      color:'orange'
    }
    console.log(this.props)
    return(
      <div>
        {this.props.navlinks.map(navlink=> <Link style={linkstyle} to={navlink.path}><h4>{navlink.name}</h4></Link>)}
      </div>
    )
  }
}

export default Navbar