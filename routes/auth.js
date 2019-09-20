const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Joi = require('Joi');
const { User, validate } = require('../models/user');
const _ = require('lodash');
const bcrypt = require('bcrypt');


router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('Invalid email or password');

    const validPassword = bcrypt.compare(req.body.password,  user.password)
    if (!validPassword) {
        return res.status(400).send('Invalid email or password');
    }

    res.send(true );
});

function validate(req) {
    const schema = {
      name: Joi.string().min(5).max(50).required(),
      email: Joi.string().min(5).max(50).required(),
      password: Joi.string().min(5).max(50).required()
    };

    return Joi.validate();
}

module.exports = router;


