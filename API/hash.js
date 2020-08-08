function hash(){
    let crypto = require('crypto');
    return crypto.randomBytes(20).toString('hex');
};
module.exports = {hash};