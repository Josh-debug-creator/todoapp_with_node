const http = require('http');

const server = http.createServer(function(req, res){


    if(req.method  === 'POST' && req.url === '/create'){
        // Create A New Todo 
        // { url: '/create', method: POST}
    }

    else if(req.method === 'GET' && req.url === '/'){        
            // Read all todos
            // {url: /, method: GET}
    }


    else if (req.method === 'GET' && req.url === '/read-one') {            
                // Read one todo
                // {url: /read-one, method: GET}
    }

    else if (req.method === 'DELETE' && req.url === '/delete') {                
                    // Delete one todo
                    // {url: /delete, method: DELETE}
    }


});

server.listen(8000, () => {
    console.log('listening on port')
})