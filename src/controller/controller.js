const express = require('express');
const router = express.Router();
const service = require('./../service/service')
const repository = require('./../repository/repository')

router.get('/testpoint', function(req, res) {
	const point = [req.query.long, req.query.lat];
	const answer = service.getSurroundingPolygons(point);
	res.send(answer);
})

router.put('/addpolygon', function(req, res){
	const polygon = req.body;
	service.addPolygon(polygon);
	res.send("polygon added successfuly");
})

module.exports = router;

