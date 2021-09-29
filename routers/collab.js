const express = require("express");
const router = express.Router();

router.use(express.json());

const collabModel = require("../models/collabModel");

// "/collab/<here>"
// here we are fetching the entire data, maybe 

router.get("/", (req, res) => {
    collabModel.find({}).sort({createdAt: 'asc'})
    .then(collaborations => res.json(collaborations))
    .catch(err => console.log(err));  
});

module.exports=router;