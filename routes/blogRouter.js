const { Router } = require('express');
const { getBlogs, addBlog, deleteBlog, getBlogById } = require('../controllers/blogController');
const { checkUser } = require('../middlewares/authMiddleware');

const blogRouter = Router();

blogRouter.get('/get', getBlogs);

blogRouter.get('/get/:id', getBlogById);

blogRouter.post('/post', checkUser, addBlog);

blogRouter.delete('/delete/:id', checkUser, deleteBlog);

module.exports = blogRouter;