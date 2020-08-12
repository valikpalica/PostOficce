const mailer = require('nodemailer');
const {hash} = require('./hash');


const transporter = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'palitsavalentin@gmail.com',
            pass: 'Romeo3177'
        }
    }
);

function sendOption(mail,key){
    mailOption.to = mail;
    mailOption.text = key;
}
let mailOption = {
    from:'palitsavalentin@gmail.com',
    to:'',
    subject:'Ключ авторизації',
    text:''
};

async function sendemail(mail){
    global.keymail = await hash();
    sendOption(mail,global.keymail);


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