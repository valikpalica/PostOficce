const mongoose = require('mongoose');
const Sub = require('../model/ShemaSub');


module.exports = async function (subName) {
    let recipient = await Sub.findOne({SubName:subName},{UserMas:true,_id:false});
    return recipient;
};