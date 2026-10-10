const fs = require('fs');
const stepStr = fs.readFileSync('c:/Users/mark.poticar/Desktop/Mark Projects/portfolio/scratch/found_step.json', 'utf8');
const idx = stepStr.indexOf('<!doctype html>');
console.log('Index:', idx);
if (idx !== -1) {
  const endIdx = stepStr.indexOf('</html>', idx) + 7;
  const rawChunk = stepStr.slice(idx, endIdx);
  const unescaped = rawChunk.replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n').replace(/\\"/g, '"');
  fs.writeFileSync('c:/Users/mark.poticar/Desktop/Mark Projects/portfolio/scratch/tablet.html', unescaped);
  console.log('Saved tablet.html with length:', unescaped.length);
}
