var mysql = require('mysql2');

//credientials for database connection
var dbserver={
    host:'localhost',
    user:'root',
    password:'@parikshit123',
    database:'business'
}

//establishing connection to database
var connection=mysql.createConnection(dbserver);
connection.connect(function(err){
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});
module.exports=connection;
