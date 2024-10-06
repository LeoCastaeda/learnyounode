import * as fs from 'fs';

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const lines: number = data.split('\n').length - 1;
  console.log(lines);
});
