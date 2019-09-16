const Joi = require('joi');
const genres = require('./routes/generes');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const customers = require('./routes/customers');



mongoose.connect('mongodb://localhost/express')
    .then(() => console.log("Express app is connecting"))
    .catch(err => console.log('Could not connect to Mongodb', err))

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
