const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');
const ledsByDigit = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];

let lineIdx = 0;
const n = Number(lines[lineIdx++]);
let output = '';

for (let index = 0; index < n; index++) {
    const digits = lines[lineIdx++];
    let total = 0;

    for (let i = 0; i < digits.length; i++) {
        total += ledsByDigit[digits.charCodeAt(i) - 48];
    }

    output += total + ' leds\n';
}

process.stdout.write(output);



