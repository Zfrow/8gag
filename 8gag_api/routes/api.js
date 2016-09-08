'use strict'
var Post = require("../models/Post"),
	express = require("express"),
	router = express.Router(),
	User = require("../models/User");

router.get("/posts/listing", function(req, res) {
	console.log("Routes - api");
	Post.getAllPosts(function(data) {
		res.status(200).json(data);
	})
});

router.post("/posts/create", function(req, res) {
	//check request body
	var post = new Post(req.body);
	post.postId = Date.now();
	post.save(function(err) {
		if (!err) {
			console.log("/posts/create - data saved successfully");
			res.status(200).json({
				"postCreate": {
					"success": true,
					"data": "post saved successfully"
				}
			});
		} else {
			console.log("/post/create - error during saving data", err)
			res.status(400).json({
				"postCreate": {
					"success": false,
					"data": "something went wrong"
				}
			});
		}
	})
})

router.get("/user/listing", function(req, res) {
	User.find({}, function(err, data) {
		if (!err) {
			res.status(200).json({
				"userListing": {
					"success": true,
					"data": data
				}
			});
		} else {
			res.status(400).json({
				"userListing": {
					"success": false,
					"data": "Something went wrong"
				}
			});
		}
	})
})

router.post("/user/create", function(req, res) {
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.email;
	var user = new User({
		username: username,
		password: password,
		email: email
	});
	user.save(function(err) {
		if (!err) {

			console.log("user saved successfully")
			res.status(200).json({
				"userCreate": {
					"success": true,
					"data": "user created"
				}
			})
		} else {
			console.log("error in saving user", err)
			res.status(400).json({
				"userCreate": {
					"success": true,
					"data": "Something went wrong"
				}
			})

		}

	})
})

router.post("/user/verify", function(req, res) {
	User.findOne({
		username: req.body.username,
		password: req.body.password
	}).exec(function(err, data) {
		if (!err) {
			if (data != null) {
				console.log(data);
				res.status(200).json({
					"userVerify": {
						"success": true,
						"data": data
					}
				})
			} else {
				console.log(2);
				res.status(400).json({
					"userVerify": {
						"success": false,
						"data": "Incorrect username or password"
					}
				})
			}
		} else {
			res.status(400).json({
				"verifyuser": {
					"success": false,
					"data": "Something went wrong"
				}
			})
		}
	})
})

module.exports = router;