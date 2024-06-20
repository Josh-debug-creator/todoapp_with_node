const http = require('http');

const server = http.createServer(function(req, res){

    // Create A New Todo 
    // { url: '/create', method: POST}


    // Read all todos
    // {url: /, method: GET}


    // Read one todo
    // {url: /read-one, method: GET}

    // Delete one todo
    // {url: /delete, method: DELETE}

});

server.listen(8000, () => {
    console.log('listening on port')
})