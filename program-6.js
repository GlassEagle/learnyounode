var mod = require("./program-6-module.js");

var path = process.argv[2];
var ext = process.argv[3];

mod(path, ext, function(err, list){
    if(err){
        return console.log(err);
    }
    
    list.forEach(function(file){
        console.log(file);
    });
})