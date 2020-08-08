const mailer = require('nodemailer');
const {hash} = require('./hash');

let transporter = mailer.createTransport({
    service:'gmail',
    auth:{
        user:'valentinpalica@gmail.com',
        pass:'Romeo3177'
    }
});

let mailOption = {
  from:'valentinpalica@gmail.com',
  to:'',
  subject:'Ключ авторизації',
  text:''
};

function sendoption(mail){
    mailOption.to = mail;
    mailOption.text = hash();
}


async function sendemail(email) {
   await sendoption(email);
   transporter.sendMail(mailOption,(err,data)=>{
        if(err){
            console.log(err, 'err');
        }
        else{
            console.log('Email send');
        }
   });

}
module.exports = {sendemail};