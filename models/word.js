var mongoose = require('mongoose');

var wordSchema = mongoose.Schema({
	text: String,
	imgSrc: String, 
    audioSrc: String,
    owner_id : { type: mongoose.Schema.Types.ObjectId, ref: 'category' }
});

var word = module.exports =  mongoose.model('Word', wordSchema)

module.exports.findWords = function(categoryId, callback) {
    word.find({owner_id: categoryId}, callback);
}

