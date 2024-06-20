const http = require('http');

const server = http.createServer(function(req, res){
    // res.writeHead(200, {"Content-Type": "application/json"})
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end(`req.url, req.method ${req.url} ${req.method}`);
   

});

server.listen(8000, () => {
    console.log('listening on port')
})