const express = require("express");
const router = express.Router();

router.use(express.json());

const expModel = require("../models/expModel");

router.get("/", (req, res) => {
    expModel.find({})
        .then(experiences => res.json(experiences))
        .catch(err => console.log(err));  
});

router.post("/id", (req,res) => {
    console.log(req);
    const {id}=req.body;
    expModel.findById(id)
             .then(response=>{res.json(response)})
             .catch(err=>{console.log(err)})    
})

router.post("/", (req, res) => 
{   
    const exp = req.body;
    console.log(exp);

    const newExp = new expModel({
        title: exp.title, 
        author: exp.author,
        description: exp.description,
        type: exp.type,
        company:exp.company,
        tags:exp.tags
    });
    
    newExp
        .save ()
        .then (result => {console.log (result); console.log("New experience added");})
        .catch (err => {
            console.log(err);
            return res.send ('Error while inserting experience');
        });
})

module.exports=router;
