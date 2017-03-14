var Assignment = require('../models/assignments');
var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
  // get list from db
  res.send('i want to list stuff');
});
router.get('/view/:id', function(req, res, next) {
  // get single record from db
  res.send('i want to view stuff');
});
router.get('/new', function(req, res, next) {
  // TODO make a form which posts to /assignments/new
  // TODO get the POSTed form data instead of fake
  // TODO redirect on success OR perhaps repsond with JSON data
  var fakePostData = {
    name: "testy",
    week: 1,
    notes: "teaewtasd"
  };
  var myAssignment = new Assignment(fakePostData);
  myAssignment.save(function(err) {
    if (err) {
      res.send("I did not save");
    } else {
      res.send("I did save... party");
    }
  });
});

module.exports = router;
