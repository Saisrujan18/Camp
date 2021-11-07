const mongoose = require ('mongoose');

// Same Post model across clubs
// club field can be used for querying
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    club:{type:String,required:true},
    hasImage:{type:Boolean},
    imageData:{type: Buffer},
    title:{type: String, required: true},
    author:{type: String, required: true},
    description: {type: [String], default: ["Description"]},
    registerable: {type: Boolean, required: true},
    registered: {type:[String], default:[]}
});
  
const PostModel = mongoose.model('post', postSchema);
  
module.exports = PostModel;