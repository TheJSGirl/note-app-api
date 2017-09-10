const mongoose = require('mongoose');
require('../config');

//use global promise instead of any 3rd party Promise lib
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, {useMongoClient : true})
.then(() => {
  console.log('Sucessfuly connected to MongoDB');
})
.catch((err) => {
  console.log('**ERROR in DB connection, exiting..');
    process.exit(-1);
});

module.exports = mongoose;
