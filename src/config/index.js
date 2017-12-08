'use strict';

let env = process.env.NODE_ENV || 'development';

if(env === 'development'){
	process.env.PORT = 5000;
	process.env.MONGODB_URI = 'mongodb://localhost:27017/NoteApp';
}
console.log('** working environment is ', env);