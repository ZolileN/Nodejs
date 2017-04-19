// require express
var express = require('express');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
    res.send('hello world new!');
});

//route for our about page
router.get('/about', function(req, res) {
    res.send('hello world again is the about page');
});

router.get('/contact');
router.post('/contact');