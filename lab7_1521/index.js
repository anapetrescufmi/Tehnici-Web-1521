const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const firstConstroller = require('./controller/FirstController');
const photoController = require('./controller/PhotosController');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/', firstConstroller);
app.use('/', photoController);

app.listen(port, () => {
    console.log("This app is listening on port 3000");
})
