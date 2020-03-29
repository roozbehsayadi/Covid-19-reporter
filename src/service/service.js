var repository = require('./../repository/repository');
var inside = require('point-in-polygon');

const checkIfPointInsidePolygon = (point, polygon) => {
	if (inside(point, polygon)){
		return true;
	}
	else return false;
};

const getSurroundingPolygons = (point) => {
	let returnValue = [];
	repository.getPolygons().forEach(element => {
		if (checkIfPointInsidePolygon(point, element.geometry.coordinates[0])){
			returnValue.push(element.properties.name);
		}
	});
	return returnValue; 
};

const addPolyogon = polygon => {
	repository.addPolygon(polygon);
};

module.exports = {
	addPolygon: this.addPolygon,
	getSurroundingPolygons: getSurroundingPolygons
};
