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
let mailOption = {
    from:'palitsavalentin@gmail.com',
    to:'programmtestandwork@gmail.com',
    subject:'Ключ авторизації',
    text:'2345'
};

function sendemail(mail){
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