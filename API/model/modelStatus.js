const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Status = new Schema({
        NameSub:String,
        ArraySendEmails:[],
        Date: Date
});


module.exports = mongoose.model('status',Status);