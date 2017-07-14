var http = require("http");
var concatStream = require("concat-stream");

httpGetMore(process.argv.slice(2));

function httpGetMore(urls) {

    var responses = new Array(urls.length),
        callbackCount = 0;

    urls.forEach(httpGet);
    function httpGet(url, index) {
    
        http.get(url, function(response) {

            response.pipe(concatStream(function(data) {

                responses[index] = data.toString();
                callbackCount++;
                printResponses();
            }));
        });
    }

    function printResponses() {
    
        if(callbackCount === urls.length) {

            responses.forEach(function(response) {
                console.log(response);
            });
        }
    }
}



