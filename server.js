
require('dotenv').config();

const express = require ('express');
const app = express ();
const cors = require ('cors');
const mongoose = require ('mongoose');
const path=require("path");

app.use(cors());
app.use(express.json());


// Getting sensitive information from .env file.

const PORT = process.env.PORT || 3001;
// Connecting to Data Base

mongoose.connect(process.env.MONGO_DB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Database connected');
});

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

if(process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'frontend', 'build')));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))
	});
}

// server listening on Port - PORT
app.listen (PORT, () => console.log (`server running on ${PORT}`));