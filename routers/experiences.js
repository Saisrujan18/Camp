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

// router.get("/id", (req, res) => {
//     ExpModel.findById(id)

// })

// This for fetching data of a particular collaboration (given: id)

router.post("/id", (req,res) => {
    console.log(req);
    const {id}=req.body;
    ExpModel.findById(id)
             .then(response=>{res.json(response)})
             .catch(err=>{console.log(err)})    
}
)

router.post("/id/edit", (req,res) => {
    console.log(req);
    const {id, data}=req.body;
    console.log(id);
    console.log(data);
    ExpModel.findByIdAndUpdate(id, data)
             .then(response=>{res.json(response)})
             .catch(err=>{console.log(err)})    
}
)

// This adds a new collaboration to the database
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
        tags:exp.tags
    });
    
    // saving it to the database
    newExp
        .save ()
        .then (result => {console.log("New experience added");})
        .catch (err => {
            console.log(err);
            return res.send ('Error while inserting experience');
        });
})

module.exports=router;
