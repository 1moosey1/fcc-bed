var fileSystem = require("fs");

fileSystem.readFile(process.argv[2], 'utf8', cnlCallback);

// Count new lines callback
function cnlCallback(err, data) {

    console.log(data.split('\n').length - 1);
}
