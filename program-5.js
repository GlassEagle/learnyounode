var fs = require("fs");
var path = require("path");

var dir = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(dir, function(err, list){
    if(err){
        console.log("Error reiding directory.");
    }
    
    list.forEach(function(fileName){
        var fileExt = path.extname(fileName);
        if(fileExt == ext){
            console.log(fileName);
        }
    });
});
