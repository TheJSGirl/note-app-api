const express   = require('express');
const bodyParser= require('body-parser');
const v1Routes  = require('./routes/v1');
const port      =  process.env.PORT;

//initiating app 
const app = express();

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//use the routes
app.use('/api/v1', v1Routes);

//listen
app.listen(port);
