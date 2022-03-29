const Blog = require('../model/blog');
class BlogService{
    async addBlog(title, description, postedBy){
        return await Blog.create({ title, description, postedBy });
    }
    async getBlogs(){
        return await Blog.find({});
    }
    async getBlogById(id){
        return await Blog.find({ _id:id }).populate('postedBy');
    }
    async deleteBlog(id){
        return await Blog.findOneAndDelete({ _id:id });
    }
}
module.exports = BlogService;