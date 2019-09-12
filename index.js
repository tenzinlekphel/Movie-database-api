const express = require('express');
const helmet = require('helmet');
const logger = require('./Logger');
const app = express();
const Joi = require('joi');
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));


app.use(logger);


const generes = [
    { id: 1, name: 'Action'},
    { id: 2, name: 'Horror'},
    { id: 3, name: 'Comedy'},
];

app.get('/api/courses', (req, res) => {
    res.send(generes);
});

app.post('/api/genres', (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = {
        id: generes.length + 1,
        name: req.body.name
    };

    generes.push(genre);
    res.send(genre);
});

app.put('/api/genres/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('The genre with the given ID');

    const { error } = validateGenre(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    generes.namae = req.body.name;
    res.send(genre);
});

app.delete('/api/genres/:id', (req, res) => {
    const genre = generes.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('The genre with the given id was not found');

    const index = genres.indexOf(genre);
    generes.splice(index, 1);
    res.send(genre);
});


app.get('/api/genres/:id', (req, res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('the genre with the cool ');
    res.send(genre);
})


function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(genre, schema);
}

// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`The server is running{port}`));

