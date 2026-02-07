
var fs = require('fs');
var fileName = "./data/result.txt";

var dataTobeWritten = "This is the data to be written to the file by Node js.";

var onFileWrite = function(err) {
    if (err) {
        console.error("Error writing to file: ", err);
    } else {
        console.log("Data successfully written to file.");
    }
};
fs.writeFile(fileName, dataTobeWritten, onFileWrite);
console.log("Node js application has about to be terminated.");
