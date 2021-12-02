const express = require("express");
const router = express.Router();
router.use(express.json());

// Importing the experience model
const ExpModel = require("../models/expModel");

// Fetching all the experiences
router.get("/", (req, res) => {
    ExpModel.find({},{description: 0, comments: 0})
        .then(experiences =>{console.log(experiences[0]); res.json(experiences)})
        .catch(err => console.log(err));  
});

// Fetch experience with specific id

router.get("/id", (req,res) => {
    const {id}=req.query;
    ExpModel.findById(id)
             .then(response=>{res.json(response)})
             .catch(err=>{console.log(err)})    
    }
)

// Editing an already existing experience.

router.post("/id/edit", (req,res) => {
    const {id, data}=req.body;
    ExpModel.findByIdAndUpdate(id, data)
             .then(response=>{res.json(response)})
             .catch(err=>{console.log(err)})    
    }
)

router.post("/id/comment", (req,res) => {
    const {id,comments} = req.body;
    console.log(comments)
    ExpModel.findByIdAndUpdate(id, { $set: { comments: comments }})
                .then(resp=>{res.json("done")})
                .catch(err=>{console.log(err);})
    
})


// This adds a new experience to the database
router.post("/", (req, res) => 
{   
    // extracting the data.
    const exp = req.body;
    console.log(exp);

    // creating a new document
    const newExp = new ExpModel({
        title: exp.title, 
        author: exp.author,
        description: exp.description,
        type: exp.type,
        displayText: exp.displayText,
        company:exp.company,
        email:exp.email
    });
    
    // saving it to the database
    newExp
        .save ()
        .then (result => {console.log("New experience added");res.json(result);})
        .catch (err => {
            console.log(err);
        });
})

module.exports=router;
