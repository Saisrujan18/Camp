const mongoose = require ('mongoose');

// This is a schema for a user

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    email: {type: String, require: true, unique: true}, 
    username: {type: String, default: function() {
        const _t = this; // tslint:disable-line
        return _t.email;
    }},
    avatar: {type: String,default:"default"},
    coins:{type:Number,default:0}
});
  
const UserModel = mongoose.model('user', userSchema);
  
module.exports = UserModel;