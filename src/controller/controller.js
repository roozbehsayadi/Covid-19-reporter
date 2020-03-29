const express = require('express');
const router = express.Router();
const service = require('./../service/service')
const logger = require('./../logger/logger')

router.get('/testpoint', function(req, res) {
	logger.log('GET request for /testpoint');
	const point = [req.query.long, req.query.lat];
	const answer = service.getSurroundingPolygons(point);
	res.send(answer);
})

router.put('/addpolygon', function(req, res){
	logger.log('PUT request for /addpolygon');
	const polygon = req.body;
	service.addPolygon(polygon);
	res.send("polygon added successfuly");
})

module.exports = router;

