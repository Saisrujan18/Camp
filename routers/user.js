const express = require("express");
const router = express.Router();

const UserModel=require("../models/userModel");
router.use(express.json());

// This for fetching data of a particular collaboration (given: id)
router.post("/", (req,res) => {

    console.log(req.body);
    const newUser=new UserModel({email:req.body.email});

    newUser
        .save ()
        .then (result => {console.log("New User added");res.json(result)})
        .catch (err => {
            console.log(err);
        });   
});

module.exports=router;