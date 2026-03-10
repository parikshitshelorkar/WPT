var express = require('express');
var path = require('path');
var cors = require('cors');//cross origin resource sharing
var bodyparser =require('body-parser');

var flowerRoutes = require('./routers/flowerRoutes');
var app = express();
app.use(cors());

app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/flowers", flowerRoutes);

app.listen(5000, ()=>{
    console.log("Server is Listening on 5000");
});
