const http = require('http');
const { showMeSomething } = require('./requests');
const classExport = require('./classExport');

const app = http.createServer(function(req, res) {
  //console.log(req);
  if (req.method === 'GET' && req.url === '/files') {
  res.writeHead(200, 'Hello');
  res.end('something');
  }
});

app.listen(3000, () => {
  showMeSomething();
  const instantiatedClass = new classExport();
  console.log(instantiatedClass.getPropertyOne());
});
