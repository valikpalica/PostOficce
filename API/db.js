const mongoose = require('mongoose');
const User = require('./shema');
let uri = 'mongodb+srv://valik:1111@cluster0.toa66.azure.mongodb.net/<dbname>?retryWrites=true&w=majority';
function connection() {
    mongoose.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },()=>{
        console.log('connection database');
    });
}
function saveUser(email,key) {
    connection();
    const user = new User({
        email:email,
        key: key,
        subscriptions: []
    });
    user.save(function (err) {
        mongoose.disconnect();
        if (err) {
            console.log(err);
        } else {
            console.log('Save user ', user);
        }
    });
}
function getAll(){
    connection();
    User.find({},function (err,docs) {
        mongoose.disconnect();
        if(err){console.log(err)}
        else {
            return docs;
        }
    })
}
function test(){
    connection();
    const user = new User({
        email: 'test@gmail.com',
        key:'132455432',
        subscriptions: 'test'
    });
    user.save((err)=>{
        mongoose.disconnect();
        if (err){console.log(err)}
        else {
            console.log('saved');
        }
    })

}
module.exports = {saveUser,getAll,test};