var net = require('net');

var port = process.argv[2];

var server = net.createServer(function(socket) {
  	var date = new Date(Date.now());
  
  	// "YYYY-MM-DD hh:mm"
  	var year = date.getFullYear();
	var month = zeroFill(date.getMonth() + 1);
  	var dateNum = zeroFill(date.getDate());
  	var hour = zeroFill(date.getHours()); 
  	var minutes = zeroFill(date.getMinutes());
  	
  	var dateString = year + '-' 
  		+ month + '-' 
  		+ dateNum + ' ' 
  		+ hour + ':' 
  		+ minutes + '\n';

	socket.end(dateString);  
});
server.listen(port);

function zeroFill(i){
	return ( i < 10 ) ? ( '0'+i ) : i;
}