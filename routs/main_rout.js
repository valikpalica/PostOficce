const express = require('express');
const  path = require('path');
const multer =  require('multer');
const sendEmails =  require('../API/Nodemailer/sendEmails');
const getAllStatus = require('../API/DBmethod/getAllStatus');
//const tempDir = multer({dest:path.join(__dirname,'../','public/upload/temp')});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname,'../','public/upload/temp'))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({storage: storage});
let {sendemail} = require('../API/Nodemailer/sendkey');
const parser = require('body-parser');
const urlencodeParse = parser.urlencoded({extended: false});
const jsonParser = parser.json({extended: true});
const {saveUser, getAll, test, find, savesub, getAllSubscibes, removeSub} = require('../API/DBmethod/db');
const router = express.Router();



router.get('/', (req, res) => {
    res.status(200).render('main.hbs');
});
router.post('/validation', jsonParser, (req, res) => {
    console.log('server');
    sendemail(req.body['mail']);
});
router.post('/key', urlencodeParse, (req, res) => {
    console.log(req.body);
    res.status(200).render('conkey.hbs', {email: req.body['email']});
});
router.post('/confirm', urlencodeParse, (req, res) => {
    const {
        email,
        key
    } = req.body;
    if (global.keymail === req.body['key']) {
        res.status(200).redirect('/');
        saveUser(email, key);
    };
});
router.get('/admin', (req, res) => {
    res.status(200).render('createsubscribe.hbs');
});
router.post('/getall', jsonParser, async (req, res) => {
    let masUser = await getAll();
    res.json({mas: masUser});
});

router.post('/findOne', jsonParser, async (req, res) => {
    let user = await find(req.body['mail']);
    console.log(user);
    res.json({user: user});
});
router.post('/savesub', jsonParser, (req, res) => {
    let objSub = req.body['subscribe'];
    res.status(200).json({answer: 'saving'});
    savesub(objSub);
});
router.get('/list', (req, res) => {
    res.status(200).render('listSubscribes.hbs')
});


router.post('/getAllSubsccribes', jsonParser, async (req, res) => {
    let rez = await getAllSubscibes();
    res.status(200).json({allSub: rez});
});
router.post('/removeSub', jsonParser, async (req, res) => {
    let name = req.body['nameSub'];
    console.log(name, ' remove');
    let result = await removeSub(name);
    console.log(result);
    res.status(200).json({answer: 'delete sucsesfull'});
});


router.post('/updatelist', urlencodeParse, (req, res) => {
    const {value} = req.body;
    res.render('updateSub.hbs',{name:value});
});
router.post('/getStatus',jsonParser,async (req,res)=>{
        try {
            const {nameSub} = req.body;
            let array  = await getAllStatus(nameSub);
            res.status(200).json({answer:array});
        }
        catch (e) {
                res.status(400).json({answer:'no valid get Status'});
        }

});
router.post('/sendEmails',urlencodeParse,(req,res)=>{
    console.log(req.body['value']);
    res.render('sendEmails.hbs',{nameSub:req.body['value']});
});

router.post('/uploadFile',upload.array('file',10),async (req,res)=>{
    console.log(req.files);
    console.log(req.body);
    try{
        await sendEmails(req.body.nameSub,req.body.name,req.body.comment,req.files);
        res.status(200).json({answer:'send'});
    }
    catch (e) {
        console.log(e);
        res.status(400).json({answer:'error'});
    }
});

router.post('/getInform',urlencodeParse,(req,res)=>{
    const {value} = req.body;
    res.render('information.hbs',{name:value});
});

router.post('/getAllStatus',jsonParser,async (req,res)=>{
    const {nameSub} = req.body;
    console.log(nameSub);
    let responseDB  = await getAllStatus(nameSub);
    console.log(responseDB);
    res.status(200).json({answer:responseDB});
});


module.exports = router;