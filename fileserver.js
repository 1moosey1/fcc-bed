var http = require("http");
var fileSystem = require("fs");

var fileStream = fileSystem.createReadStream(process.argv[3]);

var server = http.createServer(function(request, response) {
    fileStream.pipe(response);
});
server.listen(process.argv[2]);
