var mongoose = require('mongoose');

var markingSchema = mongoose.Schema({
	marks: Number,
    owner_id : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category_id : Number
});

var marking = module.exports =  mongoose.model('Marking', markingSchema)

module.exports.createMarking = function(marksObj, callback) {
    marksObj.save(callback);
}
