const express = require('express');
const router = express.Router();
const service = require('./../service/service')

router.get('/testpoint', function(req, res) {
	const point = [req.query.long, req.query.lat];
	const answer = service.getSurroundingPolygons(point);
	res.send(answer);
})

router.put('/addpolygon', function(req, res){
	res.send('in addpolygon functoin');
})

module.exports = router;

