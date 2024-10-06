import http from 'http';
import { URL } from 'url';

function parseTime(time: Date) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
    };
}

function unixTime(time: Date) {
    return { unixtime: time.getTime() };
}

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url || '', `http://${req.headers.host}`);
    const isoString = parsedUrl.searchParams.get('iso');
    let result;

    if (parsedUrl.pathname === '/api/parsetime' && isoString) {
        const time = new Date(isoString);
        result = parseTime(time);
    } else if (parsedUrl.pathname === '/api/unixtime' && isoString) {
        const time = new Date(isoString);
        result = unixTime(time);
    }

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

const PORT = Number(process.argv[2]) || 8000; // Default port to 8000 if not specified
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
