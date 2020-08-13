const mongoose = require('mongoose');
const User = require('./shema');
let uri = 'mongodb+srv://valik:1111@cluster0.toa66.azure.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connection database');
});

function saveUser(email, key) {

    const user = new User({
        email: email,
        key: key,
        subscriptions: []
    });
    user.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Save user ', user);
        }
    });
}

async function getAll() {
    try {
        let result_user = await User.find();
        return result_user;
    }
    catch (e) {
        console.log(e);
    }
}

async function find(mail) {
    try {
        let result = await User.find({email:mail});
        return result;
    }
    catch (e) {
        console.log(e)
    }
}

function test() {

    const user = new User({
        email: 'test@gmail.com',
        key: '132455432',
        subscriptions: 'test'
    });
    user.save((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('saved');
        }
    })
}

module.exports = {saveUser, getAll, test,find};