var rl = require('readline-sync');

let idade =25;
let possuiCarteiraDeMotorista = true;

if (idade >= 18 && possuiCarteiraDeMotorista) {
    console.log('Você pode dirigir!');
} else {
    console.log('Você não pode dirigir!');
}

let temPassagemComprada = true;
let temConvite = false;

if (temPassagemComprada || temConvite) {
    console.log('Você pode entrar no show!');
} else {
    console.log('Você não pode entrar no show!');
}

var notas = [8, 7, 6, 10, 9];
var soma = 0;

for (var i = 0; i < notas.length; i++) {
    soma += notas[i];
}

var media = soma / notas.length;

console.log(media);

var numero = rl.question('Digite um número: ');

if (numero < 0) {
    console.log('Número negativo');
} else if (numero > 0) {
    console.log('Número positivo');
} else {
    console.log('Número 0');
}

if (numero % 2 === 0) {
    console.log('Número par');
} else {
    console.log('Número ímpar');
}

var a = '1';
var b = 1;

if (a == b) {
    console.log('Igual');
}

if (a === b) {
    console.log('Igual');
} else {
    console.log('Diferente');
}

let nota = 75;
let notaMinima = 60;

if (nota >= notaMinima) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}


dia = rl.question('Digite um digito de 1 a 7 para ver o dia da semana: ');

switch (dia) {
    case '1':
        console.log('Domingo');
        break;
    case '2':
        console.log('Segunda');
        break;
    case '3':
        console.log('Terça');
        break;
    case '4':
        console.log('Quarta');
        break;
    case '5':
        console.log('Quinta');
        break;
    case '6':
        console.log('Sexta');
        break;
    case '7':
        console.log('Sábado');
        break;
    default:
        console.log('Dia inválido');
        break;
}

var readlineSync = require('readline-sync'),
  MAX = 60, MIN = 0, value = 30, key;
console.log('\n\n' + (new Array(20)).join(' ') +
  '[Z] <- -> [X]  FIX: [SPACE]\n');
while (true) {
  console.log('\x1B[1A\x1B[K|' +
    (new Array(value + 1)).join('-') + 'O' +
    (new Array(MAX - value + 1)).join('-') + '| ' + value);
  key = readlineSync.keyIn('',
    {hideEchoBack: true, mask: '', limit: 'zx '});
  if (key === 'z') { if (value > MIN) { value--; } }
  else if (key === 'x') { if (value < MAX) { value++; } }
  else { break; }
}
console.log('\nA value the user requested: ' + value);

if 