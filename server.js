const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));

//set up db
const mongoose = require('mongoose');
const url = 'mongodb+srv://goSocail:myamtan@cluster0.ypcqdkb.mongodb.net/GoSocial'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,});

//setup db models
require('./model/Account.js');
require('./model/Object.js');
//require('./model/User_objects.js');

//setup routes
require('./routes/authenticationRoutes.js')(app);
require('./routes/objectRoutes.js')(app);
//require('./routes/userObjRoutes.js')(app);

app.listen(3000, ()=>{
    console.log("listenind on 3000");
});