const express = require("express");
const router = express.Router();

// This handles all the requests to "url/api/collab"

// Importing the collaboration model
const CollabModel = require("../models/collabModel");

router.use(express.json());

// here we are fetching the entire data (i.e all the collaborations)
router.get("/", (req, res) => {
    CollabModel.find({}).sort({createdAt: 'asc'})
    .then(collaborations => res.json(collaborations))
    .catch(err => console.log(err));  
});

// This for fetching data of a particular collaboration (given: id)
router.post("/id", (req,res) => {
    const {id}=req.body;
    CollabModel.findById(id)
             .then(response=>{res.json(response)})
             .catch(err=>{console.log(err)})    
})

// This will add the current user to the collaboration if not already.
router.post("/id/join",(req,res)=>{
    // extracting the data from the request
    const {email, id, members}=req.body;
    // adding the new member
    members.push(email);
    CollabModel.findByIdAndUpdate(id, { $set: { members: members }})
                .then(resp=>{res.json(members)})
                .catch(err=>{console.log(err);})
})

// This adds a new collaboration to the database
router.post("/", (req, res) => 
{   
    // extracting the data from the request
    const collab = req.body;

    // creating a new document
    const newCollab = new CollabModel({
        title: collab.title, 
        author: collab.author,
        description: collab.description,
        members: collab.members
    });
    
    // saving it.
    newCollab
        .save ()
        .then (result => {console.log (result); console.log("New collab added");})
        .catch (err => {
            console.log(err);
            return res.send ('Error while inserting collab');
        });
})

module.exports=router;