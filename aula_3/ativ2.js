const prompt = require("prompt-sync")();

const nota1 = +prompt(`Digite uma nota: `);
const nota2 = +prompt(`Digite uma nota: `);
const nota3 = +prompt(`Digite uma nota: `);
const nota4 = +prompt(`Digite uma nota: `);

const media = (nota1 + nota2 + nota3 + nota4) / 4.0;

console.log(`A sua media é`, +media);

if (media >= 7.0) {
    console.log(`Aluno Aprovado!`);
} else if (media < 7.0 && media >= 5.0) {
    console.log(`Aluno em Recuperação!`);
} else {
    console.log(`Aluno Reprovado!`);
}

console.log(`---------------`);
console.log(`Fim do Programa.`);