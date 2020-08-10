const express = require('express');
let {sendemail} = require('../API/sendkey');
const parser = require('body-parser');
const urlencodeParse = parser.urlencoded({extended:true});
const jsonParser = parser.json({extended: true});
const {saveUser} = require('../API/db');
let app = express();
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).render('main.hbs');
});
router.post('/validation',jsonParser,(req,res)=>{
    sendemail(req.body['mail']);
});
router.post('/key',urlencodeParse,(req,res)=>{
    console.log(req.body);
    res.status(200).render('conkey.hbs',{email: req.body['email']});
});
router.post('/confirm',urlencodeParse,(req,res)=>{
    const {
        email,
        key
    }  = req.body;
    if (global.keymail === req.body['key']){
        res.status(200).render('signup.hbs');
        saveUser(email,key);
    };
});
module.exports = router;