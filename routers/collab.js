const express = require("express");
const CollabModel = require("../models/collabModel");
const router = express.Router();

const collabModel = require("../models/collabModel");

router.use(express.json());

// "/collab/<here>"
// here we are fetching the entire data, maybe 

router.get("/", (req, res) => {
    collabModel.find({}).sort({createdAt: 'asc'})
    .then(collaborations => res.json(collaborations))
    .catch(err => console.log(err));  
});


/// first find the document with _id = id;
/// res.json(document) -> to frontend

router.post("/id", (req,res) => {
    const {id}=req.body;
    collabModel.findById(id)
             .then(response=>{res.json(response)})
             .catch(err=>{console.log(err)})    
})

router.post("/id/join",(req,res)=>{
    const {email}=req.body;
    const {id}=req.body;
    const {members}=req.body;
    members.push(email);
    CollabModel.findByIdAndUpdate(id, { $set: { members: members }})
                .then(resp=>{res.json(members)})
                .catch(err=>{console.log(err);})
})


router.post("/", (req, res) => 
{   
    const collab = req.body;
    console.log("Collab");
    console.log(collab);

    const newCollab = new collabModel({
        title: collab.title, 
        author: collab.author,
        description: collab.description,
        members: collab.members
    });
    
    newCollab
        .save ()
        .then (result => {console.log (result); console.log("New collab added");})
        .catch (err => {
            console.log(err);
            return res.send ('Error while inserting collab');
        });
})

module.exports=router;