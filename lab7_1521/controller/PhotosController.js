var express = require('express');
var router = express.Router();

const photosService = require('../service/PhotosService');

router.get("/photos/all", async (req, res) => {
    res.send(await photosService.getAllPhotos());
}) 

module.exports = router;