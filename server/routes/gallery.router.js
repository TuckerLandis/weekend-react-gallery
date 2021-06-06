const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('liking photo: ', req.params.id);
    const queryText='UPDATE "gallery" SET likes= likes+1 WHERE "gallery".id= $1'
    pool.query(queryText, [req.params.id])
    .then((response) => {res.sendStatus(200)})
    .catch(error => {console.log('error liking: ', error)})
   
    
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    console.log('GETting images');
    const queryText = `SELECT * FROM "gallery" ORDER BY "likes" DESC`
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

// POST -->
router.post('/post', (req, res) => {
    console.log('Posting: ', )
    postObj = req.body

    const queryText = `INSERT INTO "gallery"
                        ("path", "description")
                        VALUES
                        ( $1, $2 )
                        `
                        
    pool.query(queryText, [postObj.url, postObj.desc])                    
    .then(response => {
        console.log('Succesful Post');
        res.sendStatus(201)
    })
    
})





module.exports = router;

