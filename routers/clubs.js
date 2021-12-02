const express = require("express");
const router = express.Router();

// This handles all the requests to "url/api/club/?"

const PostModel = require("../models/postModel");
const ClubModel = require("../models/clubModel");

router.use(express.json());

// Each router.get("/someclubname") fetches posts related to that club
// and send that to the frontend.
// "/access" - for querying the admmins.

router.get("/digitalwizards", (req, res) => {
    PostModel.find({club: "digitalwizards"}).sort({createdAt: 'asc'})
    .then(collaborations => res.json(collaborations))
    .catch(err => console.log(err));  
});
router.get("/digitalwizards/access", (req, res) => {
    ClubModel.find({club: "digitalwizards"})
    .then(club=> res.json(club))
    .catch(err => console.log(err));  
});

// "/sports"

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

// "/techmaniacs"

router.get("/techmaniacs", (req, res) => {
    PostModel.find({club: "techmaniacs"}).sort({createdAt: 'asc'})
    .then(collaborations => res.json(collaborations))
    .catch(err => console.log(err));  
});
router.get("/techmaniacs/access", (req, res) => {
    ClubModel.find({club: "techmaniacs"})
    .then(club=> res.json(club))
    .catch(err => console.log(err));  
});

// "/sargam"

router.get("/sargam", (req, res) => {
    PostModel.find({club: "sargam"}).sort({createdAt: 'asc'})
    .then(collaborations => res.json(collaborations))
    .catch(err => console.log(err));  
});
router.get("/sargam/access", (req, res) => {
    ClubModel.find({club: "sargam"})
    .then(club=> res.json(club))
    .catch(err => console.log(err));  
});


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
        hasImage:post.hasImage,
        imageData:post.imageData
    });
    
    // saving it.
    newPost
        .save ()
        .then (result => {console.log("New Post added");res.json(result);})
        .catch (err => {console.log(err);});
})
module.exports=router;