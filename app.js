
var express = require("express"); 

var app = express() ; 

var messages = [{email: 'dailychoices@gmail.com', owner:'Henry'}, {email: 'sycjang@gmail.com', owner:'Sungyon'}]
app.get('/messages', function(req, res){
    //res.send('Hello World11') ; 
    res.json(messages); 
}) ; 

app.listen(1234) ; 
