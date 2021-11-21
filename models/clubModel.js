const mongoose = require ('mongoose');

// Model for members who have the power to post .

const Schema = mongoose.Schema;

const ClubSchema = new Schema ({
    club:{type:String,required:true},
    members:{type:[String]}
});
  
const ClubModel = mongoose.model('club',ClubSchema);
  
module.exports = ClubModel;