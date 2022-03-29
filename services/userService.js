const User = require('../model/user');
class UserService{
    async register(username, email, password){
        return await User.create({ username, email, password });
    }
    async signin(email, password){
        return await User.login(email, password);
    }
    async delete(id){
        return await User.findOneAndDelete(id);
    }
    async getUser(id){
        return await User.find({ _id:id });
    }
}
module.exports = UserService;