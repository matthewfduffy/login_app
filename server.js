var express = require('express'),
    app = express(),
    path = require('path'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    port = 8000;


app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(){
  console.log("Server started on port" +port);
});
