const mongoose = require ('mongoose');

// This is a schema for a user

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {type: String, require: true, unique: true}, 
    avatar: {type: String},
    coins:{type:Number,default:0}
});
  
const UserModel = mongoose.model('user', userSchema);
  
module.exports = UserModel;