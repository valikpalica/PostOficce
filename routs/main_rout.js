const express = require('express');
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

module.exports = router;