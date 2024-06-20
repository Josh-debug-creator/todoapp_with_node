const http = require('http');

const server = http.createServer(function(req, res){
    if(req.method  === 'POST' && req.url === '/create'){
        const body = '';
        res.writeHead(200, {"Content-Type": "text/plain"})
        // res.end('This is a create request route')
        res.on('data', function(data){
            body += data
        })
    }

    else if(req.method === 'GET' && req.url === '/'){        
            // Read all todos
            // {url: /, method: GET}
            res.writeHead(200, {"Content-Type": "text/plain"})
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