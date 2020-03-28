var express = require('express');
var router = express.Router();

router.get('/testpoint', function(req, res) {
	res.send('in testpoint function');
})

router.put('/addpolygon', function(req, res){
	res.send('in addpolygon functoin');
})

module.exports = router;

