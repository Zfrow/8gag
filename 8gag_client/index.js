import React from 'react'
import {render} from 'react-dom'
import App from './containers/App'
import Signup from './containers/Signup'
import Login from './containers/Login'
import { Router, Route, Link, browserHistory} from 'react-router'

const url = window.location.pathname;
console.log(url)

render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
		</Route>
		<Route path="/login" component={Login}>		
		</Route>
	</Router>,
	document.getElementById("app")
)