#!/usr/bin/env node

var http = require('http');
httpServer = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});
httpServer.listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');
