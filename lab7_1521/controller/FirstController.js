var express = require('express');
var router = express.Router();

const service = require('../service/FirstService');

router.get('/first/request', (req, res) => {
    res.send(service.getObject());
})

module.exports = router;