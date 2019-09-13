const Joi = require('joi');
const genres = require('./routes/generes');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/genres', genres);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
