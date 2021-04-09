const photosModel = require('../models/PhotosModel');

async function getAllPhotos() {
    return await photosModel.getAllPhotos();
}

module.exports.getAllPhotos = getAllPhotos;