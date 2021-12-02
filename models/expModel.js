const mongoose = require ('mongoose');

// This is the schema for an experience

const Schema = mongoose.Schema;



const expSchema = new Schema ({
    company:{type:String,required:true},
    author: {type: String, require: true},
    type:{type:String,require:true},
    title:{type:String,require:true},
    displayText: {type:String, default:"New Experience"},
    description: {type: String,require:true},
    email:{type:String},
    comments: [{text: {type: String}, username:{type:String, required: true}, time:{type: String, required: true}}]
});
  
const ExpModel = mongoose.model('experiences', expSchema);
  
module.exports = ExpModel;