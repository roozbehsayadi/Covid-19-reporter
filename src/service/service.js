var repository = require('./../repository/repository');
var inside = require('point-in-polygon');
const logger = require('./../logger/logger')

const checkIfPointInsidePolygon = (point, polygon) => {
	if (inside(point, polygon)){
		return true;
	}
	else return false;
};

const getSurroundingPolygons = (point) => {
	logger.log(`Finding surrounding polygons for (${point})`);
	let returnValue = [];
	repository.getPolygons().forEach(element => {
		if (checkIfPointInsidePolygon(point, element.geometry.coordinates[0])){
			returnValue.push(element.properties.name);
		}
	});
	return returnValue; 
};

const addPolygon = polygon => {
	repository.addPolygon(polygon);
};

module.exports = {
	addPolygon: addPolygon,
	getSurroundingPolygons: getSurroundingPolygons
};
