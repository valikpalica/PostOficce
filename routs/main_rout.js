const express = require('express');
const bodyparser = require('body-parser');
let app = express();
const router = express.Router();
router.get('/',(req,res)=>{
    res.status(200).render('main.hbs');
});
router.get('/signin',(req,res)=>{
    res.status(200).render('signup.hbs');
});
router.get('/registration',(req,res)=>{
    res.status(200).render('registration.hbs');
});
router.post('/signup',(req,res)=>{
    let {login,password}= req.body;
    console.log(login,password);
});
router.post('/registration',(req,res)=>{
    let {login,password1,password2,email} = req.body;
    console.log(login,password1,password2,email);
});
module.exports = router;