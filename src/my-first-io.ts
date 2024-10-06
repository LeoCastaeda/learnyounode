import * as fs from 'fs';

const contents: string = fs.readFileSync(process.argv[2], 'utf8');
const lines: number = contents.split('\n').length - 1;
console.log(lines);
