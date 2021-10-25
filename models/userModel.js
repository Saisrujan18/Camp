const mongoose = require ('mongoose');

// This is a schema for a user
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {type: String, require: true, unique: true}, 
    avatar: {type: String},
    skill: {type: Number},
    badge: {type: [String]}
});
  
const UserModel = mongoose.model('user', userSchema);
  
module.exports = UserModel;