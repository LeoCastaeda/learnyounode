import * as http from 'http';
import map from 'through2-map';

const port = parseInt(process.argv[2], 10);

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    return res.end('Send me a POST\n');
  }

  req.pipe(map((chunk: Buffer) => {
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
