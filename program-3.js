var fs = require("fs");

var filename = process.argv[2];

var file = fs.readFileSync(filename);
file = file.toString();

var array = file.split("\n");

console.log(array.length -1);