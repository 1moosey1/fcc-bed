var fileSystem = require("fs");

module.exports = function(dir, extension, callback) {

    fileSystem.readdir(dir, handleDirRead);

    function handleDirRead(err, list) {

        if(err)
            return callback(err, null);

        var filteredList = list.filter(function(item) {
            return item.endsWith("." + extension);
        });

        callback(null, filteredList);
    }
}
