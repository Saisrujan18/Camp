const mongoose = require ('mongoose');

// This Model is to maintain the admins of the club.

const Schema = mongoose.Schema;

const ClubSchema = new Schema ({
    club:{type:String,required:true},
    members:{type:[String]}
});
  
const ClubModel = mongoose.model('club',ClubSchema);
  
module.exports = ClubModel;