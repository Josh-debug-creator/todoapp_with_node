const http = require('http');

const server = http.createServer(function(req, res){
    // res.writeHead(200, {"Content-Type": "application/json"})
    console.log(req.url, req.method);
   

});

server.listen(8000, () => {
    console.log('listening on port')
})