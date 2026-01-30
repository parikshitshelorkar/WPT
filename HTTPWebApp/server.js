//HTTP Web Server
var banking=require('../BankingApp/account.js');

var http=require('http');

var person={
    'firstname':'Parikshit',
    'lastname':'Shelorkar',
    'email':'parikshitshelorkar@transflower.in',
    'contactnumber':'9898998989'
}
var people =[
    {'firstname':'Parikshit','lastname':'Shelorkar','email':'parikshit@gmail.com','contactnumber':'9898998989'},
    {'firstname':'John','lastname':'Doe','email':'jondoe@gmail.com','contactnumber':'7878787878'},
    {'firstname':'Jane','lastname':'Smith','email':'janesmith@gmail.com','contactnumber':'6767676767'} ,
    
];

var data = "Transflower Learning Pvt. Ltd.";
//custom (program defined function)
//This is rule-
var onRequestHandler=function(request, response){
    console.log("Request is received...");  //inbuilt functions
    // response.writeHead(200, {'Content-Type':'text/json'});//code, jason object type

    //Serialization (Encoding)
    //converting JSON object into string

    // Deserialization
    //converting string into JSON object

    response.writeHead(200, {'Content-Type':'text/html'});//code, jason object type
    response.write("<h1>Welcome to Transflower Learning Pvt. Ltd.</h1>");
    // response.write("Hey this is from server...");
    // response.write(JSON.stringify(people));
    response.end();
}
var server=http.createServer(onRequestHandler);
server.listen(9999);    //0 to 1024 port no.
console.log("Server is listening on Port no. 9999");
