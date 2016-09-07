import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import Signup from './containers/Signup'
import Login from './containers/Login'

const url = window.location.pathname;
console.log(url)
if(url=="/") {
	render(
		<App />,
		document.getElementById("app")
	)
}
else if(url=="/signup") {
	render(
		<Signup />,
		document.getElementById("app")
	)
}
else if(url=="/login") {
	render(
		<Login />,
		document.getElementById("app")
	)
}
else {
	render(
		<div>NOT FOUND</div>,
		document.getElementById("app")
	)
}