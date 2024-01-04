// Create web server
// 1. Create a web server
// 2. Handle the request
// 3. Return a response
// 4. Listen on a port
// 5. Read a file
// 6. Write to a file
// 7. Append to a file
// 8. Delete a file
// 9. Rename a file

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Create web server
const server = http.createServer((req, res) => {
    // Handle the request
    let baseURI = url.parse(req.url, true);
    console.log('Requested URL: ', baseURI);
    let filepath = path.join(__dirname, baseURI.pathname);
    console.log('Filepath: ', filepath);

    // Return a response
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('Hello World');

    // Read a file
    fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 File Not Found');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });

});

// Listen on a port
server.listen(3000, () => {
    console.log('Server started on port 3000');
});