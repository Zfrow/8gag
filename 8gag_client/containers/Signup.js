import React, {Component} from 'react'
import {browserHistory} from 'react-router'
class Signup extends Component {
	constructor(props) {
		super(props)
		this.state={
			usernameValue:'',
			emailValue:'',
			passwordValue:''
		}
	}
	handleChange(e) {
		if(e.target.name=="username"){
			this.setState({
				usernameValue:e.target.value
			})
		}
		if(e.target.name=="email"){
			this.setState({
				emailValue:e.target.value
			})
		}
		if(e.target.name=="password"){
			this.setState({
				passwordValue:e.target.value
			})
		}
	}
	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state);
		//send ajax request to server for user create
		browserHistory.push("/create");
	}
	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" name="username" placeholder="Username" onChange={this.handleChange.bind(this)} value={this.state.usernameValue} /><br/>
					<input type="text" name="email" placeholder="Email" onChange={this.handleChange.bind(this)} value={this.state.emailValue} /><br/>
					<input type="text" name="password" placeholder="Password" onChange={this.handleChange.bind(this)} value={this.state.passwordValue} /><br/>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default Signup;