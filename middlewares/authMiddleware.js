const jwt = require('jsonwebtoken');
const { token_secret } = require('../conf.json');

const createToken = (id, username) => {
    return jwt.sign({ id, username }, token_secret);
};

const checkUser = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, token_secret);
    req.userData = decodedToken;
    if(req.userData){
        next();
    }else{
        res.status(401).json({ message:'Auth failed' });
    }
};

module.exports = { createToken, checkUser };