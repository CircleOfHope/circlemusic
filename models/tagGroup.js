var mongoose = require('mongoose');

var tagGroupSchema = require('./tagGroup.schema');

var TagGroup = mongoose.model('TagGroup', tagGroupSchema);

module.exports = TagGroup;