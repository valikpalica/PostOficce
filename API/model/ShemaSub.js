const mongoose = require('mongoose');
const Shema = mongoose.Schema;
const Subscribe = new Shema({
    SubName:{type:String,unique:true},
    UserMas:[],
});
module.exports = mongoose.model('subscribe',Subscribe);