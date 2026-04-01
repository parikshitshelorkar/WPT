
var fs = require('fs');
var fileName = "./data/result.txt";

var onFileRead = function(err, data){
    
    if(err){
        console.log("Error in reading file...");
        throw err;
    };
    
    console.log("Data from file available...");
    console.log(data);
    console.log(data.toString());
};

fs.readFile(fileName, onFileRead);

console.log("File read request is sent to OS...");

