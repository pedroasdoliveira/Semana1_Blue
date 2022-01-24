const prompt = require("prompt-sync")();

let nome = prompt(`Digite seu nome: `);
while (nome.length <= 3) {
    console.log(`Nome inválido. Precisa ter mais de 3 caracteres`);
    nome = prompt(`Digite seu nome: `);
}

let idade = prompt(`Digite a sua idade: `);
while (idade <= 0 || idade > 150) {
    console.log(`Idade inválida.`);
    idade = prompt(`Digite a sua idade: `);
}

let salario = prompt(`Digite seu salário: `);
while (salario <= 0) {
    console.log(`Salário inválido. `);
    salario = prompt(`Digite seu salário: `);
}

let estadoCivil = prompt(`Escreva seu estado civil: [s, c, v, d]`).toLowerCase();
while (estadoCivil != 's' && estadoCivil != 'c' && estadoCivil != 'v' && estadoCivil != 'd') {
    console.log(`Estado Civil inválido.`);
    estadoCivil = prompt(`Escreva seu estado civil: [s, c, v, d]`).toLowerCase();
}