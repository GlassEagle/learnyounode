var http = require("http");
var url = require("url");

var port = process.argv[2];

var server = http.createServer(function(request, response){
    var content = url.parse(request.url, true);
    var json = "";
    switch(content.pathname){
        case "/api/parsetime":
            json = parsetime(content.query.iso, response);
            break;
        case "/api/unixtime":
            json = unixtime(content.query.iso, response);
            break;
    }
    response.writeHead(200, { 'Content-Type': 'application/json' })  
    response.write(json);
    response.end();
});

server.listen(port);

function parsetime(iso, response){
    var date = new Date(iso);
    return JSON.stringify({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
        
    });
}

function unixtime(iso, response) {
    var date = new Date(iso);
    return JSON.stringify({
        unixtime: date.valueOf()
    });
}