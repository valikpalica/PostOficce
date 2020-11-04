const mailer = require('nodemailer');
const getAllRecipient = require('../DBmethod/getAllRecipient.js');
const writeStatus = require('../DBmethod/writeStatus');



async function createAttachments(array){
    let arr = [];
    for (let i=0;i<array.length;i++){

        arr.push({filename:array[i].filename,path:array[i].path})
    }

    return arr;
}


module.exports = async function (subName,sender,text,arrayPath) {
   try {
       let getAllfile = await createAttachments(arrayPath);
       let recipientsArray = await getAllRecipient(subName);
       console.log(recipientsArray.UserMas);
       const transporter = await mailer.createTransport({
               host: 'mail.mil.gov.ua',
               port: 25,
               secure: false,
               tls: {
                   maxVersion: 'TLSv1.3',
                   minVersion: 'TLSv1.2',
               },
               auth: {
                   user: 'security@mil.gov.ua',
                   pass: 'eP2NXH5rwW4Lb5CN'
               }
           }
       );
       let info = await transporter.sendMail({
           from:'security@mil.gov.ua',
           to:recipientsArray.UserMas,
           subject:sender,
           text:text,
           attachments:getAllfile,
       });
       console.log('Message send',info);
       try {
           await writeStatus(subName,info.accepted,info.envelope.to);
       }
       catch (e) {
           console.log('Error in write Status',e);
       }
   }
   catch (e) {
       console.log('Error in sendEmails', e)
   }




};