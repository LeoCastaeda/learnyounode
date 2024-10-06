
import * as http from 'http';

 
const urls: string[] = process.argv.slice(2);

let results: (string | null)[] = [];
let count: number = 0;

function printResults(): void {
    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);
    }
}

function httpGet(index: number): void {
    http.get(urls[index], (response) => {
        let data: string = '';

        response.setEncoding('utf8');
        response.on('data', (chunk: string) => {
            data += chunk;
        });

        response.on('end', () => {
            results[index] = data;
            count++;

            if (count === urls.length) {
                printResults();
            }
        });

        response.on('error', (err: Error) => {
            console.error(`Error fetching URL ${urls[index]}: ${err.message}`);
        });
    }).on('error', (err: Error) => {
        console.error(`Error with request to URL ${urls[index]}: ${err.message}`);
    });
}

for (let i = 0; i < urls.length; i++) {
    results[i] = null;
}


for (let i = 0; i < urls.length; i++) {
    httpGet(i);
}
