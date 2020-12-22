const express = require('express');
const router = express.Router();
const Danhmuc = require('../models/danhmuc.model');
const Hocvien = require('../models/hocvien.model');

router.get('/', (req, res) => {
    Danhmuc.find({})
        .then(danhmuc => {
            res.render('index', { danhmuc: danhmuc })
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
});

router.get('/', (req, res) => {
    Hocvien.find({})
        .then(hocvien => {
            res.render('index', { hocvien: hocvien })
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
});

module.exports = router;
