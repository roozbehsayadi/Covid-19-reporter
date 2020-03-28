const express = require('express');
const app = express();

const port = process.env.PORT;

const router = require('./controller/controller')

app.use('/gis', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!` ) );

