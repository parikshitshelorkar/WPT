var express = require('express');
var path = require('path');
const { request } = require('http');

//__dirname ----> points to -- virtual path --> http://localhost:9000
//          -----> physical path = > E:/06.TFL/WPT/EXPRESSAPP/Server.js

var app = express();//get global object from framework
// global object contains HTTP server


//for configuration of middleware
//for registration of http request with their handlers
var staticMiddleware = express.static(path.join(__dirname, "public"));
//Express framework configuration
app.use(staticMiddleware);


//Express framework setting handlers
//mapping incomming reequest to callback function
//three request handlers implemented
//http://localhost:9000/
//http://localhost:9000/hello
//http://localhost:9000/flowers
//HTTP REQUEST HANDLERS of type GET 

//first parameter is the path of the request
//second parameter is the callback function
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.get("/hello", (request, response) => {
    var flower = {"id": 1, 
                "title": "Rose", 
                "price": 100};
    response.sendFile(flower);
});

app.get("/flowers", (request, response) => {
    var flowers = [{"id": 1, "title": "Rose", "price": 100}, {"id": 2, "title": "Lily", "price": 80}, {"id": 3, "title": "Jasmine", "price": 50}];
    response.sendFile(__dirname + "/index.html");
});


app.listen(9000);
console.log("Express web app is listening on port 9000");


