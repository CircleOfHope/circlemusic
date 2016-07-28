var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagGroupSchema = new Schema({
	name: String,
	tags: [String]
});

module.exports = tagGroupSchema;