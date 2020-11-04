const Status = require('../model/modelStatus');

module.exports = async function (NameSub) {
      let response = await Status.findOne({NameSub:NameSub},{_id:false});
      return response;
};