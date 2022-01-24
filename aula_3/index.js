const prompt = require("prompt-sync")();

const num1 = +prompt(`Digite um numero: `);
const num2 = +prompt(`Digite um outro numero: `);

if (num1 === num2) {
    console.log(`Os numeros e os tipos são iguais.`);
} else if (num1 !== num2) {
    console.log(`Os dados e tipos são diferentes.`);
} else {
    console.log(`Dados errados.`);
}

console.log(`Fim do programa`);