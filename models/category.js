var mongoose = require('mongoose');

var catSchema = mongoose.Schema({
	title: String,
	image: String, 
  owner_id : { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

var category = module.exports =  mongoose.model('Category', catSchema)

module.exports.findUserCategories = function(userId, callback) {
    category.find({owner_id: userId},callback);
}

