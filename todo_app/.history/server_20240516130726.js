const http = require('http');

const server = http.createServer(function(req, res){
    // res.writeHead(200, {"Content-Type": "application/json"})
    // res.end(req.url, req.method);
    console.log(res)
   

});

server.listen(8000, () => {
    console.log('listening on port')
})