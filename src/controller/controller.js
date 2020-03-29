const express = require('express');
const router = express.Router();
const service = require('./../service/service');
const logger = require('./../logger/logger');
const { check, validationResult } = require('express-validator');
var GeoValidation = require('geojson-validation');

router.get('/testpoint', [
	check('long').exists().isFloat(),
	check('lat').exists().isFloat()
], (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		logger.log(`GET request had some issues. errors: ${JSON.stringify(errors.array())}.`);
		return res.status(400).json({ errors: errors.array() });
	}
	logger.log('GET request for /testpoint');
	const point = [req.query.long, req.query.lat];
	const answer = service.getSurroundingPolygons(point);
	res.status(200).send(answer);

});

router.put('/addpolygon', function(req, res){
	logger.log('PUT request for /addpolygon');
	const polygon = req.body;
	if (!GeoValidation.isFeature(polygon) || !GeoValidation.isPolygon(polygon.geometry)) {
		logger.log("Error in addpolygon: sent object is not a valid polygon.");
		res.status(400).send("Polygon is not a GeoJSON object.");
	}
	service.addPolygon(polygon);
	logger.log("Polygon added to database successfuly");
	res.status(200).send("polygon added successfuly");
})

module.exports = router;
