const { createToken } = require('../middlewares/authMiddleware');
const UserService = require('../services/userService');
const jwt = require('jsonwebtoken');
const { token_secret } = require('../conf.json');
let userService = new UserService();

const register = async(req, res) => {
    const{ username, email, password } = req.body;
    try {
        const createdUser = await userService.register(username, email, password);
        res.status(201).json({ message:'created', user:createdUser });
    } catch (error){
        res.status(400).json({ error:error });
    }
};

const signin = async(req, res) => {
    const{ email, password } = req.body;
    try {
        const user = userService.signin(email, password);
        const token = createToken(user._id, user.username);
        res.status(200).json({ message:'signed in', accessToken:token });
    } catch (error){
        res.status(400).json({ error:error });
    }
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const deletedUser = userService.delete(id);
    res.status(200).json({ message:'User deleted' });
};

const getUser = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, token_secret);
    const id = decodedToken.id;
    const user = userService.getUser(id);
    res.status(200).json({ user:user });
};

module.exports = { register, signin, deleteUser, getUser };