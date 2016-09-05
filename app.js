// Set up express app and configure it to accept requests.

// Required dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = requests('body-parser');

// create express app
const app = express();

// log requests to the console
app.use(logger('dev'));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// set up catch-all route
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome my peoples',
}));

module.exports = app;