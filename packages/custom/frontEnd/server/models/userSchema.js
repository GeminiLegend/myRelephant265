
var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema;

var userSchema = new Schema({
	name: String,
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	admin: Boolean,
	logedIn: Boolean,
	created_at: Date,
	updated_at: Date
});

module.exports = mongoose.model('users', userSchema);

// here we export the sceme for use