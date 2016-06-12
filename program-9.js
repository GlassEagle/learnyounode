var http = require("http");

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var urls = process.argv.slice(2, 5);
var content = [];
var completed_requests = 0;

urls.forEach(function(url, index){
    var str = "";
    http.get(url, function(response){
        response.setEncoding("utf8");
        response.on("data", function(data){
            str += data;
        });
        response.on("end", function(data){
            content[index] = str;
            completed_requests++;
            if(completed_requests == urls.length){
                content.forEach(function(val){
                    console.log(val);
                });
            }
        });
    });
});