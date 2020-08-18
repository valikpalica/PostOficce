const express = require('express');
let {sendemail} = require('../API/sendkey');
const parser = require('body-parser');
const urlencodeParse = parser.urlencoded({extended:true});
const jsonParser = parser.json({extended: true});
const {saveUser,getAll,test,find,savesub,getAllSubscibes} = require('../API/db');
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
        res.status(200).redirect('/');
        saveUser(email,key);
    };
});
router.get('/admin', (req,res)=>{
    res.status(200).render('createsubscribe.hbs');
});
router.post('/getall',jsonParser,async (req,res)=>{
    let masUser = await getAll();
    res.json({mas:masUser});
});

router.post('/findOne',jsonParser,async (req,res)=>{
    let user=await find(req.body['mail']);
    console.log(user);
    res.json({user:user});
});
router.post('/savesub',jsonParser,(req,res)=>{
    let objSub = req.body['subscribe'];
    res.status(200).json({answer:'saving'});
    savesub(objSub);
});
router.get('/list',(req,res)=>{
    res.status(200).render('listSubscribes.hbs')
});
router.post('/getAllSubsccribes',jsonParser,async (req,res)=>{
    let rez =await getAllSubscibes();
    res.status(200).json({allSub:rez});
});
module.exports = router;