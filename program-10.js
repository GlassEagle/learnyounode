var net = require("net");
var port = process.argv[2];


var server = net.createServer(function(socket){
    var date = new Date();
    var str = date.getFullYear() + "-" +
              zeroFill(date.getMonth() + 1) + "-" +
              zeroFill(date.getDate()) + " " +
              zeroFill(date.getHours()) + ":" +
              zeroFill(date.getMinutes()) + "\n";
    socket.write(str);
    socket.end();
});

server.listen(port);


function zeroFill(num){
    return num < 10 ? "0" + num : num;
}