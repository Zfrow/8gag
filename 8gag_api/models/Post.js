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