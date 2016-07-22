var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var songSchema = new Schema({
  title: String,
  author: String,
  lyrics: String,
  notes: String,
  quarantined: Boolean,
  links: [String]
});

var Song = mongoose.model('Song', songSchema);

module.exports = Song;
