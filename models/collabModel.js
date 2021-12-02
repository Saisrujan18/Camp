const mongoose = require ('mongoose');

// This is the schema for a collaboration

const Schema = mongoose.Schema;

const collabSchema = new Schema ({
    title: {type: String, require: true}, 
    author: {type: String, required: true},
    email:{type:String,required:true},
    createdAt: {type: Date, default: Date.now},
    displayText: {type: String, default: "New Collaboration"},
    description:{type:String, required: true},
    members: {type: [String]},
    comments: [{text: {type: String}, username:{type:String, required: true}, time:{type: String, required: true}}]
});
  
const CollabModel = mongoose.model('collaborations', collabSchema);
  
module.exports = CollabModel;