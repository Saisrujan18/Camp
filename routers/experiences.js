const express = require("express");
const router = express.Router();

router.use(express.json());

const expModel = require("../models/expModel");

router.get("/", (req, res) => {
    expModel.find({})
        .then(experiences => res.json(experiences))
        .catch(err => console.log(err));  
});

module.exports=router;