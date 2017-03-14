var mongoose = require('mongoose');
var Assignment = mongoose.model('Assignment', {
  name: String,
  week: Number,
  notes: String
});

module.exports = Assignment;
