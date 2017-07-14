var http = require("http");

http.get(process.argv[2], streamCallback);
function streamCallback(response) {

    response.setEncoding('utf8');
    response.on("data", console.log);
}
