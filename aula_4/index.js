const prompt = require("prompt-sync")();

console.clear();
console.log();

let num = 0;

while (num <= 10 || num >= 10) {
    if (num < 0) {
        console.log(`O número é negativo`);
        if (num < -10) {
            console.log(`Muito negativo`);
            console.log(`Vou resolver isso`);
            while (num < -10) {
                console.log(num);
                num++;
            }
        }
    }
    num = prompt(`Digite um número maior que 10: `);
}

console.log();