var server= require('http').createServer();
var app = function(request, response){
  console.log('cool');
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<p>hello</p>');
  response.end();
}
server.listen(3000);
