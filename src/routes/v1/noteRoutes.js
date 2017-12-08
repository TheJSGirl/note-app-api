const noteRoutes = require('express').Router();
const Note     = require('../../models/Note');

noteRoutes.route('/')
	.get((req, res) => {
		// finding whole data
		Note.find({})
			.then((data) => {
				// console.log('data from db: ');
				return res.status(200).json({
					data: data,
					status: 'ok',
					message: 'get data successfully'
				});
			})
			.catch((err) => {
				return res.status(404).json({
					data:[],
					status: 'failed',
					message: 'data not found'
				});
			});
	})

	.post((req, res) => {
		// console.log('request from body',req.body);
		const {note} = req.body;
		if(!note || !done){
			return res.status(400).json({
				data: [],
				status:'parameters are missing'
			});
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

	});

//delete route
noteRoutes.route('/:id')
	.delete((req, res) => {
		Note.findByIdAndRemove({_id: req.params.id})
			.then((data) =>{
				console.log('deleted');
				res.send(data);
			})
			.catch(() => {
				return res.status(404).json({
					data: [],
					status: 'something went wrong'
				});
			});
      
	});



module.exports = noteRoutes;  