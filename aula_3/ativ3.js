const prompt = require("prompt-sync")();

let A = +prompt(`Digite o valor para o lado 1: `);
let B = +prompt(`Digite o valor para o lado 2: `);
let C = +prompt(`Digite o valor para o lado 3: `);
let X = 0;

console.log();
console.log(`--------LADOS-------`);
console.log(`A: ${A} | B: ${B} | C: ${C}`);
console.log(`--------------------`);
console.log();

if (A < B) {
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    X = A;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    A = B;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
    B = X;
    console.log(`X: ${X} | A: ${A} | B: ${B}`);
}

console.log();
console.log(`--------LADOS-------`);
console.log(`A: ${A} | B: ${B} | C: ${C}`);
console.log(`--------------------`);
console.log();

if (A  >= (B + C)) {
    console.log(`Não forma um Triangulo`);
} else {
    // a*2 = b*2 + c*2
    if ( (A * A) == (B * B) + (C * C) ) {
        console.log(`Triangulo Retangulo`);
    }
    if ( (A * A) > (B * B) + (C * C) ) {
        console.log(`Triangulo Obtusangulo`);
    }
    if ( (A * A) < (B * B) + (C * C) ) {
        console.log(`Triangulo Acutangulo`);
    }
    if ( A == B && B == C) {
        console.log(`Triangulo Equilatero`);
    }
    if ( (A == B && A != C) || (B == C && B !== A) ) {
        console.log(`Triangulo Isoceles`);
    }
}

console.log();
