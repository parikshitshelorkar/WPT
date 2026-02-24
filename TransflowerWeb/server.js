var express = require('express');
var path = require('path');
const { request } = require('http');

var app = express();//get global object from framework

var staticMiddleware = express.static(path.join(__dirname, "public"));
//Express framework configuration
app.use(staticMiddleware);

//Express framework setting handlers 

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});


app.listen(9000);
console.log("Express web app is listening on port 9000");

app.post("login", (request, response) => {
  console.log("Login form is posted by browser is received by server");
});

app.post("register", (request, response)=>{
  console.log("Register form is posted by broweser is received by server");
});

