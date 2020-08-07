const express = require('express');
const bodyparser = require('body-parser');
let app = express();
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).render('main.hbs');
});
router.post('/validation',(req,res)=>{
    console.log(req.body);
    res.status(200).render('main.hbs');
});
module.exports = router;