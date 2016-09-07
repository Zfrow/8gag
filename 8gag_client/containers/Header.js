import React, {
  Component
} from 'react'
import HeaderComponent from '../components/HeaderComponent'
import Navbar from '../components/Navbar'

class Header extends Component {
  render() {
    return(
      <div>
        <HeaderComponent heading={this.props.heading} />
        <Navbar navlinks={this.props.navlinks} />
      </div>
    )
  }
}

export default Header