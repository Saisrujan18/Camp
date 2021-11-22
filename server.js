
require('dotenv').config();

const express = require ('express');
const app = express ();
const cors = require ('cors');
const mongoose = require ('mongoose');
const path=require("path");

app.use(cors());
app.use(express.json());

app.use(express.static('frontend/build'))

// Getting sensitive information from .env file.

const MONGO_DB_URI = process.env.MONGO_DB_URI;
const PORT = process.env.PORT || 3001;


// Connecting to Data Base

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

// 1. collabRouter -> this will handle requests to "url/api/collab"
// 2. expRouter -> this will handle requests to "url/api/experiences"
// 3. clubsRouter -> this will handle requests to "url/api/clubs"
const collabRouter = require ('./routers/collab');
const expRouter=require('./routers/experiences');
const clubsRouter = require('./routers/clubs');
const userRouter = require('./routers/user');

// use the routers 
app.use ('/api/collab', collabRouter);
app.use('/api/experiences',expRouter);
app.use('/api/clubs', clubsRouter);
app.use('/api/user',userRouter);

// server listening on Port - PORT
app.listen (PORT, () => console.log (`server running on ${PORT}`));