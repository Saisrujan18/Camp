const express = require ('express');
const app = express ();
const cors = require ('cors');
const mongoose = require ('mongoose');

const dotenv = require ('dotenv');
dotenv.config ();

app.use (cors ());

const MONGO_DB_URI = process.env.MONGO_DB_URI || something;
const PORT = process.env.PORT || 3001;

// const User = require ('./models/user');

// routers to handle different routes
const homeRouter = require ('./routers/home');

app.use ('/home', homeRouter);

mongoose.connect (
  MONGO_DB_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => {
    console.log ('connected to mongo_db');
  }
);






app.listen (PORT, () => console.log (`server running on port ${PORT}`));