const express = require("express");
const router = express.Router();

// This handles all the requests to "url/api/club/?"

// Importing the post model
const PostModel = require("../models/postModel");

router.use(express.json());

// here we are fetching the entire data (i.e all the post which belong to a club)
// Clubs - DigitalWizards -> DW
//       - TechManiacs -> TM
//       - LL
router.get("/DW", (req, res) => {
    CollabModel.find({club: "DW"}).sort({createdAt: 'asc'})
    .then(collaborations => res.json(collaborations))
    .catch(err => console.log(err));  
});

// This for fetching data of a particular post (given: id)
router.post("/DW/id", (req,res) => {
    const {id}=req.body;
    PostModel.findById(id)
             .then(response=>{res.json(response)})
             .catch(err=>{console.log(err)})    
})

// This will add the current user to the collaboration if not already.
router.post("/DW/id/register",(req,res)=>{
    // extracting the data from the request
    const {email, id, registered}=req.body;
    // adding the new member
    registered.push(email);
    PostModel.findByIdAndUpdate(id, { $set: { registered: registered }})
                .then(response=>{res.json(registered)})
                .catch(err=>{console.log(err);})
})

// This adds a new collaboration to the database
router.post("/DW", (req, res) => 
{   
    // extracting the data from the request
    const post = req.body;

    // creating a new document 
    // TODO: add image field
    const newPost = new PostModel({
        club: "DW",
        title: post.title, 
        author: post.author,
        description: post.description,
        registerable: post.registerable
    });
    
    // saving it.
    newPost
        .save ()
        .then (result => {console.log (result); console.log("New Post added");})
        .catch (err => {
            console.log(err);
            return res.send ('Error while inserting collab');
        });
})

module.exports=router;