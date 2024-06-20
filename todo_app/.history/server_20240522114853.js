const http = require('http');
const todos = require('./services');

const server = http.createServer(function(req, res){
    if(req.method  === 'POST' && req.url === '/create'){
        let body = '';
        req.on('data', function(data){
            body += data.toString();
        });

        req.on('end', function() {
            const result = JSON.parse(body);
            const todo = {action: result.action}
            const response = todos.createTodo(result.name, JSON.stringify(todo))
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end('successfully created')
        })
    }

    else if(req.method === 'GET' && req.url === '/'){        
            const files = todos.getAllTodos();      
            console.log(files);      
            res.writeHead(200, {"Content-Type": "application/json"})
            res.end(JSON.stringify({
                todos: files
            }))
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
    else {
        res.statusCode = 404
        res.end('Page Not Found')
    }



});

server.listen(8000, () => {
    console.log('listening on port')
})