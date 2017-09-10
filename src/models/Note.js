const mongoose = require('../db');

const noteModel = new mongoose.Schema({
  note:{
    type: String
  },
  done:{
    type: Boolean,
    default: false
  },
   timestamp: {
    type: String,
    default: new Date().toDateString()
  }
});

module.exports = mongoose.model('notes', noteModel);

