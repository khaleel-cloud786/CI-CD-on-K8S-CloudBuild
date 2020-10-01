var http = require('http');
var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("<h1> Deployed Using Cloud Build Version is v1.0.</h1>");
}
var www = http.createServer(handleRequest);
www.listen(8080);
