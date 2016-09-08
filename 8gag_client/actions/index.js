import fetch from "isomorphic-fetch"
export function getInitialPost(){
    return function(dispatch) {
      return fetch("http://localhost:3030/api/posts/listing").then(response=>response.json()).then(responseJson=>{
        console.log(responseJson);
        dispatch({type:"GETINTITIALDATA",posts:responseJson})
      })
    }
}