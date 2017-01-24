var express = require('express');
 
// Get the router
var router = express.Router();
 
var Message     = require('./models/session');
 
// Middleware for all this routers requests
router.use(function timeLog(req, res, next) {
  console.log('Request Received: ', dateDisplayed(Date.now()));
  next();
});
 
// Welcome message for a GET at http://localhost:8080/restapi
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to the REST API' });   
});
 
// GET all messages (using a GET at http://localhost:8080/messages)
router.route('/sessions')
    .get(function(req, res) {
        Message.find(function(err, messages) {
            if (err)
                res.send(err);
            res.json(messages);
        });
    });

router.route('/sessions')
    .post(function(req, res) {
    Message.create(req.body.urls, function(err){
    if(err)
      res.send(err);

    else
      res.json({ message: 'Entries created successfully!' });
  });
});

router.route('/bookmarks')
    .get(function(req, res) {
        Message.find(function(err, messages) {
            if (err)
                res.send(err);
            res.json(messages);
        });
    });

router.route('/bookmarks')
    .post(function(req, res) {
    Message.create(req.body.bkmarks, function(err){
    if(err)
      res.send(err);

    else
      res.json({ message: 'Entries created successfully!' });
  });
});

module.exports = router;
 
function dateDisplayed(timestamp) {
    var date = new Date(timestamp);
    return (date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}