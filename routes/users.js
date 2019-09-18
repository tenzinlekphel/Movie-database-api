const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Joi = require('Joi');
const { User, validate } = require('../models/user');


router.post('/', async (req, res) => {
    const genres = await Genre.find().sort('name');
    res.send(genres);
});

module.exports = router;


