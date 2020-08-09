const express = require('express');
const bodyparser = require('body-parser');
let {sendemail} = require('../API/sendkey');
const parser = require('body-parser');
const urlencodeParse = parser.urlencoded({extended:true});
const jsonParser = parser.json({extended: true});
let app = express();
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).render('main.hbs');
});
router.post('/validation',jsonParser,(req,res)=>{
    console.log('send');
    sendemail(req.body['mail']);
});
router.post('/key',urlencodeParse,(req,res)=>{
    console.log(req.body);
    res.status(200).render('conkey.hbs',{email: req.body['email']});
});
router.post('/confirm',urlencodeParse,(req,res)=>{
    if (global.keymail === req.body['key']){
        res.status(200).render('signup.hbs');
    }
});
module.exports = router;