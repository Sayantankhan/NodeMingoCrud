'use strict'
var express = require('express'),
    morgan = require('morgan');
var app = express();
const port = process.env.port || 8082;
var helmet = require('helmet');
var config = require('config');
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var route = require('../js/route/route');

require('promise/lib/rejection-tracking').enable(
    {allRejections: true}   // track all exceptions,
);
// log only 4xx and 5xx responses to console
app.use(morgan('dev', {
    skip: function (req, res) { return res.statusCode > 400 }
}));

// log all requests to access.log
app.use(morgan('common', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
}));

// helmet config
app.use(helmet());
app.use(helmet.noCache());
app.use(helmet({
  frameguard: false
}));

app.use(bodyParser.urlencoded({extended : true}));
mongoose.connect(config.DBHost,(err) => {
    if (err) return console.log(err);
});
var router = express.Router();
app.use('/api',route(router));

app.listen(port);
console.log(`server start at port :: ${port}`);