var express = require("express"),
	router = express.Router(),
	Post = require("../models/Post"),
	userController = require("../controllers/user.controller");


router.get('/signup',userController.signupController);
router.get('/login',userController.loginController);
module.exports = router;