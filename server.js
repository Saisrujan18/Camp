
require('dotenv').config();

const express = require ('express');
const app = express ();
const cors = require ('cors');
const mongoose = require ('mongoose');

app.use(cors());
app.use(express.json());

const MONGO_DB_URI = process.env.MONGO_DB_URI;
const PORT = process.env.PORT || 3001;

// const expModel=require("./models/expModel");

dbConnect().catch(err => console.log(err));

async function dbConnect() 
{
	await mongoose.connect (
		MONGO_DB_URI,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	  );	  
}

// const arr = 
// 	[{ company:"Adob",
// 	author: 'vasam manjunath',
// 	type:'Internship',
// 	title:'2lakhs',
// 	description: 'easy',
// 	tags:'competitive programming' }, {
// 		company:"Adobe",
//     	author: 'vasam manjunath',
//     	type:'Internship',
//     	title:'2lakhs',
//     	description: 'easy',
//     	tags:'competitive programming'}];
// expModel.insertMany(arr)
// 	.then(r=>console.log(r))
// 	.catch(err=>console.log(err))


// routers
const collabRouter = require ('./routers/collab');
const expRouter=require('./routers/experiences');

app.use ('/api/collab', collabRouter);
app.use('/api/experiences',expRouter);

app.listen (PORT, () => console.log (`server running on ${PORT}`));