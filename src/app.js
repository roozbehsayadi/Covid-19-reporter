const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT;
const expressValidator = require('express-validator');

const winston = require('winston');

const logger = require('./logger/logger');

logger.log(`Server started at ${(new Date()).toJSON().slice(0, 19).replace(/[-T]/g, ':')}`);

const router = require('./controller/controller');

app.use(bodyParser.json());
app.use(express.json());
app.use('/gis', router);

app.use(function(req, res, next) {
	logger.log(`Route ${req.url} not found.`);
	return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
  });

app.listen(port, () => logger.log(`Server listening on port ${port}!`));

process.on('SIGINT', function() {
	logger.log(`Request for closing server at ${(new Date()).toJSON().slice(0, 19).replace(/[-T]/g, ':')}`);
	process.exit();
});
