var http = require('http');

var url = process.argv[2];

http.get(url, function(response){
	response.setEncoding("utf8");
	
	response.on("err", function(err){
		return console.error(err);
	});

	var result = "";
	response.on("data", function(data){
		result += data;
	});

	response.on("end", function(){
		console.log(result.length);
		console.log(result);
	});
});