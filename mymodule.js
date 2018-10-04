var fs = require("fs");
var path = require("path");

module.exports = function (dir, ext, callback){

	fs.readdir(dir, function (err, list) {
		if(err){
			callback(err, null);
		} 
		else {
			result = []; count = 0;
		
			list.forEach(function(file){
				if(path.extname(file) === "." + ext){
					result[count++] = file
				}
			});

			callback(null, result);
		}
	});
}