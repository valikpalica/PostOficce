const mongoose = require('mongoose');
const GetModel = mongoose.Schema;
const User = new GetModel({
   email:String,
   key:String,
   status:String
});

module.exports = mongoose.model('user',User);