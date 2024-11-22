const http = require('http');
const fs = require('fs');
const path = require('path');

// Helper function to serve files
function serveFile(filePath, contentType, res) {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`, 'utf-8');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}

// Create HTTP server
const server = http.createServer((req, res) => {
    let filePath = './pages/home.html'; // Default to home page
    let contentType = 'text/html';

    if (req.url === '/about') filePath = './pages/about.html';
    else if (req.url === '/projects') filePath = './pages/projects.html';
    else if (req.url === '/contact') filePath = './pages/contact.html';
    else if (req.url.startsWith('/css/')) {
        filePath = `./public${req.url}`;
        contentType = 'text/css';
    } else if (req.url.startsWith('/js/')) {
        filePath = `./public${req.url}`;
        contentType = 'application/javascript';
    } else if (req.url.startsWith('/images/')) {
        filePath = `./public${req.url}`;
        contentType = 'image/jpeg'; // or appropriate image type
    }

    serveFile(filePath, contentType, res);
});

// Start server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
