const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true, 'username required']
    },
    email:{
        type:String,
        required:[true, 'email required']
    },
    password:{
        type:String,
        required:[true, 'password required']
    }
});
userSchema.post('save', async function(doc, next){
    next();
});
userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
userSchema.statics.login = async function(email ,password){
    const user = await this.findOne({ email });
    if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect username');
};
const User = mongoose.model('User', userSchema);
module.exports = User;