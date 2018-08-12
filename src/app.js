'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
 
const app = express();
const router = express.Router();

// Conecta ao Mongoose -> MongoDB
mongoose.connect('mongodb://biolabs:biolabs1@ds219432.mlab.com:19432/biolabs');

//carraga os Models
// const Product = require('./models/product');

// Carrega Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: false
}));

app.use('/', indexRoute);
app.use('/products', productRoute);
// app.use('/products', put);
// app.use('/products', del);

module.exports = app;
