const express = require("express");
const router = express.Router();

const UserModel=require("../models/userModel");
router.use(express.json());

router.get("/", (req,res) =>{
    const {email} = req.query;
    UserModel.find({email: email})
    .then((user) => res.json(user))
    .catch(err => console.log(err));
})

router.post("/newuser", (req,res) => {
    const {email, username} = req.body;
    UserModel.findOneAndUpdate({email: email}, {username: username})
    .then(r => res.send("Done"))
    .catch(err => console.log(err));
})

router.post("/", (req,res) => {

    const {email} = req.body;

    UserModel
        .findOne({email: email})
        .then(user => {
            if( user ) {
                if ( user.username == email)
                    return res.json("nousername");
                console.log(user);
                return res.json(user);
            }
            const newUser=new UserModel({email:req.body.email});
            newUser
                .save ()
                .then (result => {console.log("New User added");res.json("nousername")})
                .catch (err => {
                    console.log(err);
                });   
        })
        .catch(err => console.log(err));

    
});

module.exports=router;