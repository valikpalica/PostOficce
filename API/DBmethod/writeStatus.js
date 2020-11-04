const Status = require('../model/modelStatus');
const treatmentResponse = require('../WorkWithStatus/treatmentResponse');
const date = new Date;



module.exports =async function (nameSub,ArrayAccepted,ArrayTo) {
    let arrayObjStatus  = await treatmentResponse(ArrayAccepted,ArrayTo);
    let status = new Status({
        NameSub: nameSub,
        ArraySendEmails:arrayObjStatus,
        Date: date.getDate(),
    });
    status.save(err=>{
        if(err){
            console.log(err);
        }
        console.log('Saved');
    })
};