const mailer = require('nodemailer');
const {hash} = require('./hash');


const transporter = mailer.createTransport({
        host: 'mail.mil.gov.ua',
        port: 25,
        secure: false,
        tls:{
            maxVersion: 'TLSv1.3',
            minVersion: 'TLSv1.2',
        },
        auth: {
            user: 'security@mil.gov.ua',
            pass: 'eP2NXH5rwW4Lb5CN'
        }
    }
);

function sendOption(mail,key){
    mailOption.to = mail;
    mailOption.text = key;
}
let mailOption = {
    from:'security@mil.gov.ua',
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