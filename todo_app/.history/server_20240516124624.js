const http = require('http');

const server = http.createServer(function(req, res){

});

server.listen(8000, () => {
    console.log('listening on port')
})