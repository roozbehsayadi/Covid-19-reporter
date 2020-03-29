const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const repository = require('./repository/repository');

const port = process.env.PORT;

const router = require('./controller/controller')

app.use(bodyParser.json());
app.use('/gis', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!` ) );
