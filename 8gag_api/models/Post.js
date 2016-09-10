'use strict'
var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
	created: {
		type: Date,
		default: Date.now
	},
	postId: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	content: {
		type: String
	}
})

var Post = mongoose.model('Post', postSchema);

module.exports = Post;

module.exports.getAllPosts = function(cl) {
	Post.find({},{_id:0}).exec(function(err, data) {
		if(!err) {
			cl(data);
		} else{
			throw err;
		}
	})
}

//update post
module.exports.postUpdate = function(id, post, options, callback){
	var query = {id:_id};
	var update = {
		created:post.created,
		postId:post.postId,
		title:post.title,
		content:post.content
	}
	Post.findOneAndUpdate(query, update, options, callback);
}

//delete post
module.exports.postDelete = function(id, callback){
	var query = {id:_id};
	Post.remove(query, callback);
}