const express = require("express");
const router = express.Router();
router.use(express.json());

// Importing the collaboration model
const ExpModel = require("../models/expModel");

// fetching all the experiences
router.get("/", (req, res) => {
    ExpModel.find({})
        .then(experiences => res.json(experiences))
        .catch(err => console.log(err));  
});


router.get("/id", (req,res) => {
    const {id}=req.query;
    ExpModel.findById(id)
             .then(response=>{res.json(response)})
             .catch(err=>{console.log(err)})    
}
)

router.post("/id/edit", (req,res) => {
    const {id, data}=req.body;
    ExpModel.findByIdAndUpdate(id, data)
             .then(response=>{res.json(response)})
             .catch(err=>{console.log(err)})    
}
)

// This adds a new experience to the database
router.post("/", (req, res) => 
{   
    // extracting the data.
    const exp = req.body;

    // creating a new document
    const newExp = new ExpModel({
        title: exp.title, 
        author: exp.author,
        description: exp.description,
        type: exp.type,
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
