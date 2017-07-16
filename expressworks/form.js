var express = require("express");
var bodyparser = require("body-parser");

var app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.post("/form", function(request, response) {

    response.send(request.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);
