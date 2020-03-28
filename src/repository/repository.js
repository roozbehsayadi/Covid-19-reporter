const fs = require("fs");

let polygonsGISData = JSON.parse(fs.readFileSync('resources/repository.json'));

const getPolygons = () => {
    return polygonsGISData.features;
};

const addPolygon = (polygon) => {
    polygonsGISData.features.push(polyton);
};

module.exports = {
    getPolygons: getPolygons,
    addPolygon: addPolygon
};
