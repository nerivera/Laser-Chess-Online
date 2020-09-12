import http from 'http';
import url from 'url';
import fs from 'fs';
import yaml from 'yaml';

var server = http.createServer(function (req, res) {
  let path = url.parse(req.url).pathname;
  switch (req.method) {
    case 'GET':
      switch (path) {
        case '/':
          fs.readFile(__dirname + '/Public/index.html', function (err, data) {
            if (err) {
              res.writeHead(404);
              res.write(err);
              res.end();
            } else {
              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.write(data);
              res.end();
            }
          });
          break;
        case '/state':
          break;
      }
      break;
    case 'POST':
      switch (path) {

      }
      break;
    default:
      console.log(`Unknown ${req.method} request: ${path}`);
      res.end();
  }
});

server.listen(8080);