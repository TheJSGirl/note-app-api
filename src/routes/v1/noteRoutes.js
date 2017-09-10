const noteRoutes = require('express').Router();
const Note     = require('../../models/Note');

noteRoutes.route('/')
  .get((req, res) => {
    // finding whole data
    Note.find({})
      .then((data) => {
        console.log('data from db: ');
        return console.log(data);
      })
      .catch((err) => {
        return console.log(err);
      });
  })
  .post((req, res) => {
    console.log(req.body);
    const {note, done} = req.body;
    const oneNotes = {
      note,
      done
    };
    
    let myNotes = new Note(oneNotes);
    if(!oneNotes){
      return;
    } 
    
    myNotes.save()
    .then((data) => {
      return res.status(200).json({
        data:data,
        status:'ok',
      });
    })
    .catch((err) => {
      return res.status(404).json({
        data:[],
        status:'failed'
      });
    });

  })

  module.exports = noteRoutes;  