const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true, 'title required']
    },
    description:{
        type:String,
        required:[true, 'description required']
    },
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;