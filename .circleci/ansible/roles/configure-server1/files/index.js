var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("Welcome to Udapeople JS");
});
server.listen(3030);