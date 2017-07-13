fileSystem = require("fs");

fileSystem.readdir(process.argv[2], dirCallBack);

function dirCallBack(err, list) {

    var extension = "." + process.argv[3];
    list.forEach(function (item) {

        if(item.endsWith(extension))
            console.log(item);
    });
}
