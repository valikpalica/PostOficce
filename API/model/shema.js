const mongoose = require('mongoose');
const Shema = mongoose.Schema;
const User = new Shema({
   email:{type:String,unique:true},
   key:String,
   subscriptions:[String],

});

module.exports = mongoose.model('user',User);