var rl = require('readline-sync');

var tabela = [
    {
        nome: 'Maçã',
        preco: 2.00
    },
    {
        nome: 'Banana',
        preco: 1.50
    },
    {
        nome: 'Pêra',
        preco: 2.50
    },
    {
        nome: 'Laraja',
        preco: 3.00
    }
]

console.log('\n Bem-vindo à Frutaria Benites! \n');
console.log('|-----\t Tabela de preços ------| ');
console.log('|\t Maçã: R$ 2,00 \t \t|');
console.log('|\t Banana: R$ 1,50 \t|');
console.log('|\t Pêra: R$ 2,50 \t \t|');
console.log('|\t Laranja: R$ 3,00 \t|');
console.log('|-------------------------------|\n');


quantidadeMaça = rl.question('Quantas macas voce deseja? ');
quantidadeBanana = rl.question('Quantas bananas voce deseja? ');
quantidadePera = rl.question('Quantas peras voce deseja? ');
quantidadeLaranja = rl.question('Quantas laranjas voce deseja? ');

totalMaça = quantidadeMaça * tabela[0].preco;
totalBanana = quantidadeBanana * tabela[1].preco;
totalPera = quantidadePera * tabela[2].preco;
totalLaranja = quantidadeLaranja * tabela[3].preco;

total = totalMaça + totalBanana + totalPera + totalLaranja;


console.log('\n|-----\t Conta Final \t--------| ');
if (quantidadeMaça > 0) {
    console.log(`|\t Maca: R$ ${totalMaça.toFixed(2)} \t \t|`);
}
if (quantidadeBanana > 0) {
    console.log(`|\t Banana: R$ ${totalBanana.toFixed(2)} \t|`);
}
if (quantidadePera > 0) {
    console.log(`|\t Pera: R$ ${totalPera.toFixed(2)} \t \t|`);
}
if (quantidadeLaranja > 0) {
    console.log(`|\t Laranja: R$ ${totalLaranja.toFixed(2)} \t|`);
}
console.log(`|\t Total: R$ ${total.toFixed(2)} \t|`);
console.log('|-------------------------------|\n');
console.log('Obrigado pela preferência! Volte sempre!');
