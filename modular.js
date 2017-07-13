var dirModule = require("./dirmodule.js");

dirModule(process.argv[2], process.argv[3], printFilteredDir);
function printFilteredDir(err, list) {

    if(err)
        console.log("Error filtering directory");
    else
        list.forEach(function(item) { console.log(item); });
}
