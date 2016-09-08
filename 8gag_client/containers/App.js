import React, {
  Component
} from 'react'
import Header from './Header'
import auth from './auth'
import {connect} from 'react-redux'
class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {/**
    const request = new XMLHttpRequest()
    const _this = this
    request.open('GET','http://localhost:3030/api/posts/listing',true)
    request.onload = function() {
      console.log(request)
      _this.setState({
        posts:JSON.parse(request.response)
      })
    }
    request.send()
    **/
  }
  render() {
    let count=0
    const navlinks=[{name:"Hot",path:"#"},{name:"Trending",path:"#"},{name:"Fresh",path:"#"},{name:"Login",path:"/login"},{name:"Signup",path:"/signup"},{name:"Create",path:"/create"}]
    const style={
      backgroundColor:'#ff0'

    }
    return(
      <div>
        <Header heading="buenas dias" navlinks={navlinks} />
        <div>
          {this.props.reducer.posts.map(post=><div key={count++} style={style}><h3>{post.title}</h3><p>{post.content}</p></div>)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}
export default connect(mapStateToProps)(App)