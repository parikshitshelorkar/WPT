
var http = require('http');
var fs = require('fs');
const path = require('path');

var onRequestHandler = function (request, response) {
    var pathName = "./"+request.url;
    console.log(pathName);
    fs.readFile(pathName, (error, data) => {
        if (error) {
            console.log("Error reading file: " + error);
            response.writeHead(404, { "Content-Type": "text/html" });
        }
        else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data.toString());
        }
        response.end();
    });

};
    var server = http.createServer(onRequestHandler);
    server.listen(9898);
    console.log("HTTP Server is listening on port 9898");