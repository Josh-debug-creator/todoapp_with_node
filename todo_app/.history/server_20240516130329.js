const http = require('http');

const server = http.createServer(function(req, res){
    res.end(req.url, req.method);
    if(req.method  === 'POST' && req.url === '/create'){
        // Create A New Todo 
        // { url: '/create', method: POST}
        res.end('This is a create request route')
    }

    else if(req.method === 'GET' && req.url === '/'){        
            // Read all todos
            // {url: /, method: GET}
            res.end('this is to get all todos')
    }


    else if (req.method === 'GET' && req.url === '/read-one') {            
                // Read one todo
                // {url: /read-one, method: GET}
            res.end('this is to get one todo')
    }

    else if (req.method === 'DELETE' && req.url === '/delete') {                
                    // Delete one todo
                    // {url: /delete, method: DELETE}

            res.end('this is to delete one todo')
    }


});

server.listen(8000, () => {
    console.log('listening on port')
})