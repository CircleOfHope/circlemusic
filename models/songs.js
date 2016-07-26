var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var linkSchema = new Schema({
	name: String,
	url: String
});

var tagGroupSchema = require('./tagGroup.schema');

var songSchema = new Schema({
  title: String,
  author: String,
  lyrics: String,
  notes: String,
  scripture: String,
  quarantined: Boolean,
  active: Boolean,
  legacyId: Number,
  links: [linkSchema],
  tagGroups: [tagGroupSchema]
});

var Song = mongoose.model('Song', songSchema);

module.exports = Song;
