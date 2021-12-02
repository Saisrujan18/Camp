const express = require("express");
const router = express.Router();

// This handles all the requests to "url/api/collab"

// Importing the collaboration model
const CollabModel = require("../models/collabModel");
router.use(express.json());

// Fetching the entire data (i.e all the collaborations)
router.get("/", (req, res) => {
    CollabModel.find({},{description: 0}).sort({createdAt: 'asc'})
    .then(collaborations => res.json(collaborations))
    .catch(err => console.log(err));  
});

//Fetching data of a particular collaboration (given: id)
router.get("/id", (req,res) => {
    const {id}=req.query;
    CollabModel.findById(id)
             .then(response=>{res.json(response)})
             .catch(err=>{console.log(err)})    
})

// Editing already created collaboration. 
router.post("/id/edit", (req,res) => {
    const {id, data} = req.body;
    CollabModel.findByIdAndUpdate(id, data)
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

router.post("/id/comment", (req,res) => {
    const {id,comments} = req.body;
    console.log(comments)
    CollabModel.findByIdAndUpdate(id, { $set: { comments: comments }})
                .then(resp=>{res.json("done")})
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
        displayText: collab.displayText,
        members: collab.members,
        email:collab.email
    });
    
    // saving it.
    newCollab
        .save ()
        .then (result => {console.log("New collab added");res.json(result)})
        .catch (err => {
            console.log(err);
        });
})

module.exports=router;