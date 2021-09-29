
require('dotenv').config();

const express = require ('express');
const app = express ();
const cors = require ('cors');
const mongoose = require ('mongoose');

app.use(cors());
app.use(express.json());

const MONGO_DB_URI = process.env.MONGO_DB_URI;
const PORT = process.env.PORT || 3001;

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

const collabRouter = require ('./routers/collab');
app.use ('/collab', collabRouter);





app.listen (PORT, () => console.log (`server running on ${PORT}`));