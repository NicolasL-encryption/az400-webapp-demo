const http = require('http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello AZ-400! je suis Nicolas ! ');
});

const port = process.env.PORT || 8080;
server.listen(port);