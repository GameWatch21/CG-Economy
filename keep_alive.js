var http = require('http');

http.createServer(function (req, res) {
  res.write("Cmon, Wake up dude");
  res.end();
}).listen(8080);