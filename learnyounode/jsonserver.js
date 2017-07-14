var http = require("http");
var url = require("url");

var isoPath = "/api/parsetime",
    unixPath = "/api/unixtime";

var server = http.createServer(function(request, response) {

    var serverMessage = "Could not process!";
    if(request.method !== "GET") {

        response.writeHead(400, { 'Content-Type': 'text/plain' });
        return response.end(serverMessage);
    }

    response.writeHead(200, { 'Content-Type': 'application/json' });

    var requestUrl = url.parse(request.url, true);
    if(requestUrl.pathname === isoPath)
        serverMessage = isoEndpoint(requestUrl.query.iso);

    else if(requestUrl.pathname === unixPath)
        serverMessage = unixEndpoint(requestUrl.query.iso);

    response.end(serverMessage);
});
server.listen(process.argv[2]);

function isoEndpoint(query) {

    var date = new Date(query);
    return JSON.stringify({

        'hour': date.getHours(),
        'minute': date.getMinutes(),
        'second': date.getSeconds()
    });
}

function unixEndpoint(query) {

    return JSON.stringify({
        'unixtime': Date.parse(query)
    });
}
