const mongoose = require('mongoose');
const User = require('getModel');

function connection() {
    mongoose.connect('mongodb+srv://valik:1111@cluster0.toa66.azure.mongodb.net/<dbname>?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },()=>{
        console.log('connection database');
    });
}
function updateUserStatus(mail){
    connection();
    User.updateOne({email: mail,status:'enable'});
    mongoose.disconnect();
}
function DisableUserStatus(mail) {
    connection();
    User.updateOne({email:mail,status:'disable'});
    mongoose.disconnect();
}

function saveUser(email,key) {
    connection();
    const user = new User({
        email:email,
        key: key,
        status: 'enable'
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

module.exports = {saveUser};