var User = require('../models/userSchema.js')

var newUser	= new User({
	name : {{}},
	username: {{}},
	password: {{}},
	admin: 0,
	logedIn: {{}}/*logged in state?*/,
	created_at: {{}}/*current date something*/,
	updated_at: {{}}
});

newUser.save(function(err){
	if(err) throw err;

	console.log('User saved successsfully');
});