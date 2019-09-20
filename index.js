const Joi = require('joi');
const genres = require('./routes/generes');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');
const auth = require('./routes/auth');

mongoose.connect('mongodb://localhost/express')
    .then(() => console.log("Express app is connecting"))
    .catch(err => console.log('Could not connect to Mongodb', err))

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
