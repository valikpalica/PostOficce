const mongoose = require('mongoose');
const Shema = mongoose.Schema;
const User = new Shema({
   email:String,
   key:String,
   status:String
});

module.exports = mongoose.model('user',User);