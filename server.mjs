import http from 'http';
import url from 'url';
import fs from 'fs';

var server = http.createServer(function(req, res) {
    let path = url.parse(req.url).pathname;
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('Server working as expected.');
    res.end();
});

server.listen(8080);