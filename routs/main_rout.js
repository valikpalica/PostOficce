const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).render('main.hbs');
});
router.get('',(req,res)=>{
    res.status(200).render('');
});
router.get('',(req,res)=>{
    res.status(200).render();
});

module.exports = router;