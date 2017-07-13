var fileSystem = require("fs");

console.log(countNewLines(process.argv[2]));

function countNewLines(filePath) {

    var fileBuffer = fileSystem.readFileSync(filePath);

    // Return number of newlines
    return fileBuffer.toString().split("\n").length - 1;
}
