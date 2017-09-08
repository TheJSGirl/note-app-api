const express   = require('express');
const bodyParser= require('body-parser');
const mongodb   = require('mongodb');
const v1Routes      = require('./routes/v1');


//initiating app 
const app = express();

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//use the routes
app.use('/api/v1', v1Routes);
