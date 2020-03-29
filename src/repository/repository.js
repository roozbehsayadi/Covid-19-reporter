const fs = require("fs");
const logger = require('./../logger/logger')

let polygonsGISData = JSON.parse(fs.readFileSync('resources/repository.json'));
// polygonsGISData.features.forEach(element => {
// 	console.log(element.geometry.coordinates[0]);
// });

const getPolygons = () => {
	return polygonsGISData.features;
};

const addPolygon = (polygon) => {
	polygonsGISData.features.push(polygon);
	fs.writeFile("resources/repository.json", JSON.stringify(polygonsGISData, null, '\t'), 'utf8', function(err) {
		if (err) {
			logger.log(`An error occured while updating polygons database with the new polygon: ${polygon}`);
			return;
		}
	});
	logger.log(`Added polygon ${polygon} to database successfully.`);
};

module.exports = {
	getPolygons: getPolygons,
	addPolygon: addPolygon
};
