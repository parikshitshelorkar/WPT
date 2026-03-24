const express = require("express");
const cors = require("cors");
const path = require('path');
const bodyparser = require('body-parser');

const rolesRouter = require("./router/Router");

var app = express();

app.use(cors())

app.use(bodyparser.json())

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/roles",rolesRouter);
app.listen(3898);