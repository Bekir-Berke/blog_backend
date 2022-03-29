const { Router } = require('express');
const { register, signin, deleteUser, getUser } = require('../controllers/userController');
const { checkUser } = require('../middlewares/authMiddleware');
const userRouter = Router();

userRouter.post('/register', register);
userRouter.post('/signin', signin);
userRouter.delete('/delete/:id', checkUser, deleteUser);
userRouter.get('/get', checkUser, getUser);

module.exports = userRouter;