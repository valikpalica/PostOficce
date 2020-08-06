const express = require('express');
const exHbs = require('express-handlebars');
const hbs = require('hbs');
const routs = require('./routs/main_rout');
const  app = express();
let PORT = 8080 || process.env.PORT;
app.listen(PORT,()=>{
   console.log(`server has been started on port ${PORT}`);
});
app.use(express.static(__dirname+'/public'));
app.engine('hbs',exHbs({
   extname:'hbs',
   defaultLayout: 'layout',
   layoutsDir:'views/layouts'
}));
app.set('view engine','hbs');
app.use('/',routs);

