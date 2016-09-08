module.exports= {
	isLoggedin() {
		console.log(localStorge)
		return !!localStorage.token
	},
	logout() {
		delete localStorage.token
	},
	logIn(username,password,cb) {
		var xhr = new XMLHttpRequest();
		xhr.open('POST','http://localhost:3030/api/verifyUser',true);
		xhr.setRequestHeader("Content-type","application/json");
		xhr.onload = function() {
			if(xhr.status == 200) {
				console.log(xhr.responseText);
				//set localStorge token
			} else{
				console.log(xhr.responseText);
			}
		}
		xhr.send({
			username: username,
			password: password
		})
	}
}