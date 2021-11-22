const mongoose = require ('mongoose');

// This is the schema for an experience

const Schema = mongoose.Schema;

const expSchema = new Schema ({
    company:{type:String,required:true},
    author: {type: String, require: true},
    type:{type:String,require:true},
    title:{type:String,require:true},
    description: {type: String,require:true},
    email:{type:String}
});
  
const ExpModel = mongoose.model('experiences', expSchema);
  
module.exports = ExpModel;