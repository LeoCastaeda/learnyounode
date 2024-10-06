const args: string[] = process.argv.slice(2);
const sum: number = args.reduce((acc, curr) => acc + Number(curr), 0);
console.log(sum);
