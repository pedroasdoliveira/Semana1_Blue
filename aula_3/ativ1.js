const prompt = require("prompt-sync")();

const num1 = +prompt(`Digite um numero: `);
const num2 = +prompt(`Digite um outro numero: `);

if (num1 > num2) {
    console.log(`O numero 1 é maior que o numero 2.`);
} else if (num1 < num2) {
    console.log(`O numero 2 é maior que o numero 1.`);
} else if (num1 == num2) {
    console.log(`Os dois numeros são iguais.`);
} else {
    console.log(`Erro no calculo.`);
}

console.log(`Fim do programa.`);