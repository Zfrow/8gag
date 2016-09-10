'use strict'

var mongoose = require("mongoose"),
	bcrypt = require("bcryptjs");

var userSchema = new mongoose.Schema({
	created: {
		type: Date,
		default: Date.now
	},
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password:{
		type:String,
		required:true
	}
});

var User = mongoose.model("User",userSchema);
module.exports = User;

module.exports.createUser = function(newUser, cb) {
	bcrypt.genSalt(10,function(err, salt) {
		bcrypt.hash(newUser.password, salt, function(err,hash) {
			newUser.password = hash;
			newUser.save(callback);
		})
	})
}

//update user
module.exports.userUpdate = function(id, user, options, callback){
	var query = {id:_id};
	var update = {
		created:user.created,
		username:user.username,
		email:user.email,
		password:user.password
	}
	User.findOneAndUpdate(query, update, options, callback);
}

//delete user
module.exports.userDelete = function(id, callback){
	var query = {id:_id};
	User.remove(query, callback)
}