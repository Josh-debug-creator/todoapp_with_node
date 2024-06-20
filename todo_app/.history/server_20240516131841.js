const http = require('http');
const server = http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    if(req.method === 'POST' && req.url === '/create'){
        // Create a new todo 
        // {url:"/create", method:"POST"}
        res.end("This is a create request Route")
    }
    else if(req.method === 'GET' && req.url === '/'){
        // Read all todo
        // {url:"/", method:"GET"}
        res.end("This is a Read all Todo request Route")

    }
   else if(req.method === 'GET' && req.url === '/readd-one'){

       // Read a todo
       // {url:"/read-one", method:"GET"}
       res.end("This is a Read One Todo request Route")

   }
   else if(register.method === 'DELETE' && req.url === '/delete'){
    // Delete a todo
    // {url:"/delete", method:"DELETE"}
    res.end("This is a DELETE request Route")

   }
  

});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});