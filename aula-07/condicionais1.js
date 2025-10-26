const prompt = require('readline-sync') //

const idade = Number(prompt.question('Digite sua idade? '))

const ehMaiorDeIdade = idade >= 18;

// Estrutura condicional: if/else

if (ehMaiorDeIdade) {
    console.log('Você é maior de idade!');
}
else {
    console.log('Você é menor de idade!');
}

const mediaDoAluno = 4;

if (mediaDoAluno >= 7) {
    console.log('Aprovado!');
    console.log('Parabéns! 😀✌️');
} 
else if (mediaDoAluno >= 5) {
    console.log('Prova de Recuperação!');
}
else {
    console.log('Reprovado!');
}

// 1. Preciso ser maior de idade
// 2. Preciso ter CNH
const idadeMotorista = 17;
const temCNH = true;

if (idadeMotorista >= 18 && temCNH) {
    console.log('Pode dirigir!');
} else {
    console.log('Você NÃO pode dirigir!');
}