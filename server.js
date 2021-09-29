
require('dotenv').config();

const express = require ('express');
const app = express ();
const cors = require ('cors');
const mongoose = require ('mongoose');

app.use(cors());
app.use(express.json());

const MONGO_DB_URI = process.env.MONGO_DB_URI;

// const MONGO_DB_URI="mongodb://localhost:27017/camp"
const PORT = process.env.PORT || 3001;



const collabRouter = require ('./routers/collab');

app.use ('/home', collabRouter);


mongoose.connect (
	MONGO_DB_URI,
	{
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	},
	() => {
  
		console.log(MONGO_DB_URI);
		console.log ('connected to mongo_db');
		  CollabModel.insertMany(arr)
		  .then(res=>console.log(res))
		  .catch(err=>console.log(err))
  
	}
  );
  
app.listen (PORT, () => console.log (`server running on ${PORT}`));


const CollabModel=require("./models/collabModel");

const arr = [{ title: 'Star Wars',	author: 'efw',description: "desc"},{ title: 'Sta Wars',author: 'ef',description: "des"}];
