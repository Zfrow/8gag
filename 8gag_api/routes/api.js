'use strict'
var Post = require("../models/Post"),
	express = require("express"),
	router = express.Router();

router.get("/posts/listing", function(req, res) {
	console.log("Routes - api");
	Post.getAllPosts(function(data){
		res.status(200).json(data);
	})
});

router.post("/posts/create",function(req,res){
	//check request body
	var post= new Post(req.body);
	post.postId = Date.now();
	post.save(function(err){
		if(!err){
			console.log("/posts/create - data saved successfully");
			res.status(200).json({
				"postCreate":{
					"success":true,
					"data":"post saved successfully"
				}
			});
		} else{
			console.log("/post/create - error during saving data",err)
			res.status(400).json({
				"postCreate":{
					"success":false,
					"data":"something went wrong"
				}
			});
		}
	})
})


module.exports = router;