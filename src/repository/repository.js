const fs = require("fs");

let polygonsGISData = JSON.parse(fs.readFileSync('resources/repository.json'));
// polygonsGISData.features.forEach(element => {
// 	console.log(element.geometry.coordinates[0]);
// });

const getPolygons = () => {
	return polygonsGISData.features;
};

const addPolygon = (polygon) => {
	polygonsGISData.features.push(polygon);
};

module.exports = {
	getPolygons: getPolygons,
	addPolygon: addPolygon
};
