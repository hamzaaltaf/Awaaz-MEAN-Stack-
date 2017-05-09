var mongoose = require('mongoose');

// var Dictionary = mongoose.model('dictionary', mongoose.Schema({
// 	_id : Number,
//     words_arr: [{ type: Schema.Types.ObjectId, ref: 'words' }]
// }));


// var words = mongoose.model('words', mongoose.Schema({
// 	name: String,
//     audioFile: String,
//     imageFile: String,
//     dictionary: [{ type: Number, ref: 'dictionary' }]
// }));

var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    passwordConfirmation: String,
    dictionaries:[{ type: mongoose.Schema.Types.ObjectId, ref: 'dictionary' }]
})
var user = module.exports =  mongoose.model('User', userSchema)

module.exports.createUser = function(userobj, callback) {
    userobj.save(callback);
}

module.exports.updateUser = function(userobj, callback) {
   console.log('look at this ' + userobj)
   user.findOneAndUpdate(
        { "email" : userobj.email},userobj, callback)
}

module.exports.findUserByEmail =  function(email, callback) {
    user.findOne({email: email}, callback)
}

module.exports.findUserById = function(id, callback) {
    user.findOne({_id: id}, callback)
}

