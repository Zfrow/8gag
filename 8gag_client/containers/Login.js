import React,{Component} from 'react'

class Login extends Component{
	constructor(props) {
		super(props)
		this.state={
			usernameValue:'',
			passwordValue:''
		}
	}
	handleSubmit(e){
		e.preventDefault();
		var request = new XMLHttpRequest();
		request.open('POST',"http://localhost:3030/api/user/verify",true);
		request.onload=function() {
			console.log(request.response);
		}
		request.send({
			"username":this.state.usernameValue,
			"password":this.state.passwordValue
		});
	}
	handleChange(e) {
		if(e.target.name=="username") {
			this.setState({
				usernameValue:e.target.value
			})
		}
		if(e.target.name="password") {
			this.setState({
				passwordValue:e.target.value
			})
		}
	}
	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" name="username" onChange={this.handleChange.bind(this)} /><br/>
					<input type="text" password="password" onChange={this.handleChange.bind(this)} /><br/>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default Login