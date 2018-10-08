var http = require('http');
var url = require('url')

var port = Number(process.argv[2]);

var server = http.createServer(function(request, response) {
	if (request.method != 'GET'){
    	return resuest.end('send me a GET\n')
	}
	
	var urlObj = url.parse(request.url, true), 
		pathname = urlObj.pathname,
		timeStr = urlObj.query.iso,
		result;

	if(pathname === '/api/parsetime'){
		result = getTimeObj(timeStr);
	}

	if(pathname === '/api/unixtime'){
		result = getUnixTime(timeStr)
	}

	if(result){
		response.writeHead(200, { 'Content-Type': 'application/json' })
		response.end(JSON.stringify(result));
	} else{
		response.writeHead(404);
    	response.end();
	}
});
server.listen(port);

function parseTime(timeString){
	return Date.parse(timeString);
}

function getTimeObj(str){
	var date = new Date(parseTime(str));

	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	};
}

function getUnixTime(str){
	return {
		unixtime: parseTime(str)
	};
}