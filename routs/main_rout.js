const express = require('express');
let {sendemail} = require('../API/sendkey');
const parser = require('body-parser');
const urlencodeParse = parser.urlencoded({extended:true});
const jsonParser = parser.json({extended: true});
const {saveUser,getAll,test,find} = require('../API/db');
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).render('main.hbs');
});
router.post('/validation',jsonParser,(req,res)=>{
    console.log('server');
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
        res.status(200).render('main.hbs');
        saveUser(email,key);
    };
});
router.get('/admin', (req,res)=>{
    res.status(200).render('createsubscribe.hbs');
});
router.post('/getall',jsonParser,async (req,res)=>{
    let masUser = await getAll();
    //console.log(masUser);
    res.json({mas:masUser});
});

router.post('/findOne',jsonParser,async (req,res)=>{
    let user=await find(req.body['mail']);
    console.log(user);
    res.json({user:user});
});




module.exports = router;