// -- A MONTANHA DOS DESAFIOS --

const prompt = require("prompt-sync")();


let continuacao = '1';

while (continuacao == '1') {
    console.log(`--------------------`);
    const nomePersonagem = prompt("O nome do seu personagem: ");

    console.log(`-------------------`);
    console.log();

    console.log(`Meu nome é ${nomePersonagem}, eu sou um aventureio com o objetivo de alcançar o cume da grande montanha de Yiping, também conhecida como a montanha do desafios segundo a religião local. No meu dessa minha jornada pretendo encontrar varios desafios, complicações e exigencias para seguir com meu objetivo.`);

    console.log();
    console.log(`-------------------`);
    console.log();

    let passosSim = 0;

    console.log(`Meu primeiro passo é verificar se estou no caminho certo. Acredito ser esse o caminho certo, por isso irei seguir por ele, será que estou certo disso? [s / n]`);
    let passo_1 = prompt();

    if ((passo_1.toLowerCase()) == 's') {
        passosSim = passosSim + 1;
    } else {
        passosSim = passosSim;
    }

    console.log();
    console.log(`------------------`);
    console.log();

    console.log(`Será que estou esquecendo algo? Será que coletei todo o equipamento necessario para a jornada? [s / n]`);
    let passo_2 = prompt();

    if ((passo_2.toLowerCase()) == 's') {
        passosSim = passosSim + 1;
    } else {
        passosSim = passosSim;
    }

    console.log();
    console.log(`------------------`);
    console.log();

    console.log(`O tempo atual está um pouco tempestuoso e com bastante ventos, porém irei seguir assim mesmo, pórem acredito estar preparado para lidar com essa situação, certo? [s / n]`);
    let passo_3 = prompt();

    if ((passo_3.toLowerCase()) == 's') {
        passosSim = passosSim + 1;
    } else {
        passosSim = passosSim;
    }

    console.log();
    console.log(`------------------`);
    console.log();

    console.log(`Chegando mais proximo do objetivo encontro uma parede de gelo em que eu possa escalar com meu equipamento, agilizando um pouco o processo, pórem se não funcionar posso seguir pelo caminho de pedras logo a frente. Devo escalar e assumir o risco? [s / n]`);
    let passo_4 = prompt();

    if ((passo_4.toLowerCase()) == 's') {
        passosSim = passosSim + 1;
    } else {
        passosSim = passosSim;
    }

    console.log();
    console.log(`------------------`);
    console.log();

    console.log(`Meu ultimo obstaculo é a parpe de escala com deslizes para os lados. Para isso preciso verificar se todos os meus equipamentos e estou em forma e concentrado para isso, caso não deveria voltar a meu acampamento montado proximo. Será que estou pronto para isso? [s / n]`);
    let passo_5 = prompt();

    if ((passo_5.toLowerCase()) == 's') {
        passosSim = passosSim + 1;
    } else {
        passosSim = passosSim;
    }

    console.log();
    console.log();

    console.log(`-------------------`);
    console.log(`Conforme suas escolhas dadas elas irão dizer se consegui chegar em meu objetivo ou não`);
    console.log(`-------------------`);
    console.log();

    if (passosSim == 0) {
        console.log(`Eu falhei com meu objetivo.`);
    } else if (passosSim <= 2) {
        console.log(`Eu fracassei, porem ainda consegui uma boas fotos.`);
    } else if (passosSim == 3) {
        console.log(`Cheguei bem proximo de meu objetivo, mas por algumas falhas eu não cheguei ao fim.`);
    } else if (passosSim == 4) {
        console.log(`Consegui alcançar meu objetivo, porém acredito que poderia ser melhor.`);
    } else {
        console.log(`Eu consegui chegar em meu objetivo de forma incrivel.`)
    }
    console.log(`-------------------`);
    console.log();
    console.log(`E com isso minha jornada chega ao fim.`);
    console.log(`-------------------`);
    console.log();
    console.log(`Game Over`);
    console.log();
    console.log(`---------------------`);

    console.log(`Gostaria de jogar de novo?`);
    console.log(`Digite 1 para recomeçar`);
    console.log(`Digite 0 para parar`);
     
    console.log();
    console.log(`--------------------`);
    continuacao = prompt();
    console.log();

    if (continuacao != '1') {
        break;
    }
}

console.log();
console.log(`----------------------`);
console.log();