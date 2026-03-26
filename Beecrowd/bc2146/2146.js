const input = require('fs').readFileSync('dados.txt', 'utf8');
const lines = input.split('\n');

while(true) {
    const line = lines.shift();

    if (!lines) {
        break;
    }
    console.log(line-1);
};  