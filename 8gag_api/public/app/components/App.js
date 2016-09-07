import React, {
	Component
} from 'react'
import Header from './Header'
class App extends Component {
	constructor(props) {
		super(props)
		this.state={
			posts:[]
		}
	}
	componentDidMount() {
		const request = new XMLHttpRequest()
		const _this = this
		request.open('GET','/api/posts/listing',true)
		request.onload = function() {
			console.log(request)
			_this.setState({
				posts:JSON.parse(request.response)
			})
		}
		request.send()
	}
	render() {
		let count=0
		const navlinks=[{name:"Hot"},{name:"Trending"},{name:"Fresh"}]
		const style={
			backgroundColor:'#ff0'

		}
		return(
			<div>
				<Header heading="buenas dias" navlinks={navlinks} />
				<div>
					{this.state.posts.map(post=><div key={count++} style={style}><h3>{post.title}</h3><p>{post.content}</p></div>)}
				</div>
			</div>
		)
	}
}

export default App