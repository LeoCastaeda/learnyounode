const http = require('http');

const server = http.createServer((req: any, res: any) => {
    let date = new Date();
    let totalDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(totalDate + '\n');
});

server.listen(8000, () => {
    console.log('Servidor HTTP escuchando en el puerto 8000');
});
