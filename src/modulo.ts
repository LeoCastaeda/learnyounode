import * as fs from 'fs';
import * as path from 'path';

export function filterFiles(dir: string, ext: string, callback: (err: Error | null, files?: string[]) => void): void {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return callback(err);
    }
    const filteredFiles: string[] = files.filter(file => path.extname(file) === `.${ext}`);
    callback(null, filteredFiles);
  });
}
