const fs = require('fs');
var fileName = 'hello.js'

console.log('##### blocking ####')

var lines = fs.readFileSync(fileName, 'utf8')
console.log(lines)
console.log('Proximo processamento depois de ler o arquivo ...')


console.log('##### non blocking ####')
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log('Proximo processamento depois de ler o arquivo ...')