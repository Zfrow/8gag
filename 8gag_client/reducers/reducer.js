const initial_state={
	posts:[],
	loggedIn:false,
	userInfo:{
		username:null
	}
}
export default function reducer(state=initial_state,action) {
	console.log(action);
	switch(action.type) {
		case "LOGIN":
			return Object.assign({},state,{loggedIn:true,userInfo:{username:action.username}})
		case "GETINTITIALDATA":
			return Object.assign({},state,{posts:action.posts})
	}
	return state;
}
