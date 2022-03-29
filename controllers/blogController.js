const BlogService = require('../services/blogService');
let blogService = new BlogService();

const getBlogs = async(req, res) => {
    const blogs = await blogService.getBlogs();
    res.status(200).json({ blogs:blogs });
};

const getBlogById = async(req, res) => {
    const id = req.params.id;
    const blog = await blogService.getBlogById(id);
    res.status(200).json({ blog:blog });
};

const addBlog = async(req, res) => {
    const{ title, description, postedBy } = req.body;
    const createdBlog = await blogService.addBlog(title, description, postedBy);
    res.status(201).json({ message:'created', blog:createdBlog });
};

const deleteBlog = async(req, res) => {
    const id = req.params.id;
    const deletedBlog = await blogService.deleteBlog(id);
    res.status(200).json({ message:'Blog deleted' });
};

module.exports = { getBlogs, getBlogById, addBlog, deleteBlog };
