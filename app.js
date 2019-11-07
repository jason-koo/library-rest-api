//app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// getting route to product route
const product = require('./routes/product-route');

// Databse connection
const db = require('./db');
db.connect(() => {
    mongoose.connection.on('connected', function(){
        console.log('connection was successful on' + mongoose.connection.name + '!');
    });
});


// Use body parser for user inputs
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', express.static('views'));


// CORS errors handling
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Contro-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next(); 
});


//Route which should handles requests
app.use('/library', product);



// Error handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
            }
    });
});

module.exports = app;