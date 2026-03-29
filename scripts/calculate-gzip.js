const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const files = ['./dist/index.js', './dist/index.d.ts'];
let combinedContent = '';

files.forEach(file => {
  if (fs.existsSync(file)) {
    combinedContent += fs.readFileSync(file, 'utf-8');
  }
});

zlib.gzip(combinedContent, (err, result) => {
  if (err) throw err;
  console.log(result.length);
});
