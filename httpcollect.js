var http = require("http");
var concatStream = require("concat-stream");

http.get(process.argv[2], handleResponse);

function handleResponse(response) {

    response.pipe(concatStream(function(data) {

        var dataString = data.toString();
        console.log(data.length);
        console.log(dataString);
    }));
}
