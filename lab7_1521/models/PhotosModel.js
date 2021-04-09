const { Client } = require('pg')
const secret = require('../secret');
const client = new Client({
        host: 'localhost',
        user: 'anapetrescu',
        password: secret.password,
        database: 'tw',
    })


async function getAllPhotos() {
    await client.connect();
    const photos = await client.query("SELECT * FROM proiect.phots;");
    return photos.rows;
}

module.exports.getAllPhotos = getAllPhotos;