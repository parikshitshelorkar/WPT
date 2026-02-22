var express = require('express');
var path = require('path');
const { request } = require('http');

var app = express();//get global object from framework

var staticMiddleware = express.static(path.join(__dirname, "public"));
//Express framework configuration
app.use(staticMiddleware);

//Express framework setting handlers
app.get("/index", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.get("/about", (request, response) => {
    response.sendFile(__dirname + "/about.html");
});

app.listen(9000);
console.log("Express web app is listening on port 9000");

app.get("/contact", (request, response) => {
    response.sendFile(__dirname + "/contact.html");
});

app.get("/services", (request, response) => {
    response.sendFile(__dirname + "/services.html");
}); 

app.post("/login", (request, response) => {
    response.sendFile(__dirname + "/login.html")
});
app.post("/register", (request, response)=>{
    response.sendFile(__dirname, + "/register.html")
});

