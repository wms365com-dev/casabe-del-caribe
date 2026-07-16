// Static server for the Casabe del Caribe site (Railway-ready).
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;

const TYPES = {
  '.html':'text/html; charset=utf-8', '.jpg':'image/jpeg', '.jpeg':'image/jpeg',
  '.png':'image/png', '.svg':'image/svg+xml', '.ico':'image/x-icon',
  '.css':'text/css', '.js':'text/javascript', '.txt':'text/plain',
  '.xml':'application/xml', '.json':'application/json', '.webmanifest':'application/manifest+json'
};

http.createServer(function(req, res){
  let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';
  const safe = path.normalize(urlPath).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(__dirname, safe);
  fs.readFile(filePath, function(err, data){
    if (err) {
      fs.readFile(path.join(__dirname, 'index.html'), function(e2, d2){
        if (e2) { res.writeHead(500); res.end('Server error'); return; }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(d2);
      });
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': TYPES[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(port, '0.0.0.0', function(){ console.log('Casabe site running on port ' + port); });
