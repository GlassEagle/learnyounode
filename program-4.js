var fs = require("fs");

var filename = process.argv[2];

var file = fs.readFile(filename, function(err, data){
    if(err){
        console.log("error reading file");
    }
    var array = data.toString().split("\n");
    console.log(array.length -1);
});


