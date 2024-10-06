import * as fs from 'fs';
import * as path from 'path';

fs.readdir(process.argv[2], (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  const filteredFiles: string[] = files.filter(file => path.extname(file) === `.${process.argv[3]}`);
  filteredFiles.forEach(file => console.log(file));
});
