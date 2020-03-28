const express = require('express');
const app = express();
const port = 3000;
const router = require('./controller/controller')

app.use('/gis', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!` ) );

