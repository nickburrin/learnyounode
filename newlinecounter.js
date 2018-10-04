var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var lines = buf.toString('ascii').split("\n").length-1;

console.log(lines);