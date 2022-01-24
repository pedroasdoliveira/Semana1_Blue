const prompt = require("prompt-sync")();

console.log(`Digite o seu nome: `);
let nome = prompt();
console.log(`Digite sua senha: `);
let senha = prompt();

while (nome == senha) {
    console.log(`Dados inválidos.`);
    console.log(`Nome e senha devem ser diferentes.`);

    console.log(`Digite o seu nome: `);
    nome = prompt();
    console.log(`Digite sua senha: `);
    senha = prompt();
}