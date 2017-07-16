var express = require("express");
var fileSystem = require("fs");

var app = express(), file;
fileSystem.readFile(process.argv[3], loadServer);

function loadServer(err, data) {

    file = JSON.parse(data);
    app.get("/books", function(request, response) {

        response.json(file);
    });

    app.listen(process.argv[2]);
}


