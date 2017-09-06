// import files and packages up here

const express = require('express');
const morgan = require('morgan');
const jasonData = require('./data.json');

// create your express server below


var app = express();
// add your routes and middleware below
app.use(morgan('dev'));
app.use(express.static('/users/christopherwong/oca/startnow-web101-san-diego-top-spots'));
app.get('/data', function(req,res) {
    res.status(200).json(jasonData);
});

// finally export the express application
module.exports = app;
