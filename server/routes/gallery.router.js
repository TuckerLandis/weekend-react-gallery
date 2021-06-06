const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    console.log('GETting images');
    const queryText = `SELECT * FROM "gallery"`
    pool.query(queryText)
    .then(response => {
        console.log('DB response: ', response.rows);
        res.send(response.rows)
    })
    .catch(error => {
        console.log('Error getting gallery: ', error);
        res.sendStatus(500)
    })
}); // END GET Route

module.exports = router;


// // OLD GET Route
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route


// // OLD PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route