var express = require("express");
var crypto = require("crypto");

var app = express();
app.put("/message/:id", function(request, response, next) {

    var shaHash = crypto.createHash("sha1")
        .update(new Date().toDateString() + request.params.id)
        .digest("hex");
    response.send(shaHash);
});

app.listen(process.argv[2]);
