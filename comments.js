// Create web server
// Command: node comments.js
// Access: http://localhost:3000
// Description: Create a web server that listens for requests and returns the comments page
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/comments.html', 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000, '