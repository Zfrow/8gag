import React from 'react'
import {render} from 'react-dom'
import App from './containers/App'
import Signup from './containers/Signup'
import Login from './containers/Login'
import Create from './containers/Create'
import { Router, Route, Link, browserHistory} from 'react-router'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import {getInitialPost} from './actions'
const url = window.location.pathname;
console.log(url)

const store = configureStore();

store.dispatch(getInitialPost())

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
			</Route>
			<Route path="/login" component={Login}>		
			</Route>
			<Route path="/signup" component={Signup}>
			</Route>
			<Route path="/create" component = {Create}>
			</Route>
		</Router>
	</Provider>,
	document.getElementById("app")
)