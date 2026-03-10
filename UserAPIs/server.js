var express = require('express');
var sql = require('mysql2');
var cors = require('cors');
var path = require('path')
var bodyparser = require('body-parser');

var userRoutes = require('./routers/userRoutes');
var app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/users', userRoutes);


app.listen(9000,()=>{
    console.log("Server is listening on port 9000");
})

