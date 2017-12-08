const noteRoutes = require('express').Router();
const Note     = require('../../models/Note');
const sendResponse = require('../../helper/sendResponse');

noteRoutes.route('/')
	.get((req, res) => {
		// finding whole data
		Note.find({})
			.then((data) => {
				// console.log('data from db: ');
				return sendResponse(res, 200, data, 'fetched data successful');
			})
			.catch((err) => {
				return sendResponse(res, 404, [], 'data not found');
			});
	})

	.post((req, res) => {
		// console.log('request from body',req.body);
		const {note} = req.body;
		if(!note){
			return sendResponse(res, 400, [], 'parameters are missing');
		}
		const oneNotes = {
			note
		};
    
		let myNotes = new Note(oneNotes);
 
		console.log(myNotes);

		//saving data into database    
		myNotes.save()
			.then((data) => {
				// console.log('*****data from db', data);   //note data is not saving
				return sendResponse(res, 200, data, 'saved successfully');
			})
			.catch((err) => {
				return sendResponse(res, 404, [], 'not found');
			});

	});

//delete route
noteRoutes.route('/:id')
	.delete((req, res) => {
		Note.findByIdAndRemove({_id: req.params.id})
			.then((data) =>{
				console.log('deleted');
				// res.send(data);
				return sendResponse(res, 200, [], 'deleted successfully');
			})
			.catch(() => {
				return sendResponse(res, 500, [], 'something went wrong');
			});
      
	});



module.exports = noteRoutes;  