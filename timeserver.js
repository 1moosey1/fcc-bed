var net = require("net");
var pad = require("pad");

var server = net.createServer(function(socket) {
    socket.end(getCustomDate() + "\n");
});
server.listen(process.argv[2]);

function getCustomDate() {

    var date = new Date(),
        dateString; 

    dateString = date.getFullYear() + "-";
    dateString += pad(2, (date.getMonth() + 1), "0") + "-";
    dateString += pad(2,  date.getDate(),       "0") + " ";
    dateString += pad(2,  date.getHours(),      "0") + ":";
    dateString += pad(2,  date.getMinutes(),    "0");
   
    return dateString;
}
