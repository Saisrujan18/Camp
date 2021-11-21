const express = require("express");
const router = express.Router();

// This handles all the requests to "url/api/club/?"

const PostModel = require("../models/postModel");
const ClubModel = require("../models/clubModel");
router.use(express.json());

// Each router.get("/someclubname") fetches posts related to that club
// and send that to the frontend.

router.get("/digitalwizards", (req, res) => {
    PostModel.find({club: "digitalwizards"}).sort({createdAt: 'asc'})
    .then(collaborations => res.json(collaborations))
    .catch(err => console.log(err));  
});

router.get("/sports", (req, res) => {
    PostModel.find({club: "sports"}).sort({createdAt: 'asc'})
    .then(collaborations => res.json(collaborations))
    .catch(err => console.log(err));  
});

router.get("/sports/access", (req, res) => {
    ClubModel.find({club: "sports"})
    .then(club=> res.json(club))
    .catch(err => console.log(err));  
});


router.get("/techmaniacs", (req, res) => {
    PostModel.find({club: "techmaniacs"}).sort({createdAt: 'asc'})
    .then(collaborations => res.json(collaborations))
    .catch(err => console.log(err));  
});

router.get("/sargam", (req, res) => {
    PostModel.find({club: "sargam"}).sort({createdAt: 'asc'})
    .then(collaborations => res.json(collaborations))
    .catch(err => console.log(err));  
});

// .....
// This for fetching data of a particular post (given: id)
router.post("/digitalwizards/id", (req,res) => {
    const {id}=req.body;
    PostModel.findById(id)
             .then(response=>{res.json(response)})
             .catch(err=>{console.log(err)})    
})

// This will add the current user to the collaboration if not already.
router.post("/digitalwizards/id/register",(req,res)=>{
    // extracting the data from the request
    const {email, id, registered}=req.body;
    // adding the new member
    registered.push(email);
    PostModel.findByIdAndUpdate(id, { $set: { registered: registered }})
                .then(response=>{res.json(registered)})
                .catch(err=>{console.log(err);})
})


// This adds a new Post to the database
router.post("/newpost", (req, res) => 
{   
    // extracting the data from the request
    const post = req.body;

    // creating a new document file.
    const newPost = new PostModel({
        club: post.club,
        title: post.title, 
        author: post.author,
        description: post.description,
        registrable: post.registrable,
        hasImage:post.hasImage,
        imageData:post.imageData,
        registered:post.registered
    });
    
    // saving it.
    newPost
        .save ()
        .then (result => {console.log("New Post added");res.json(result);})
        .catch (err => {console.log(err);});
})
module.exports=router;