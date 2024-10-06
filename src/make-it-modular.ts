import { filterFiles } from './modulo';

filterFiles(process.argv[2], process.argv[3], (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  files?.forEach(file => console.log(file));
});
