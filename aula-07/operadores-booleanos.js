// Operadores Booleanos: Comparações.

const numero1 = 10;
const numero2 = 12;

console.log(numero1 == numero2); // Igualdade: verifica se os valores são iguais (retorna true ou false)
console.log(numero1 === numero2); // Estrita Igualdade: verifica se os valores e tipos são iguais (retorna true ou false)
console.log(numero1 === "10"); // false

console.log(numero1 >= numero2); // Maior ou Igual

const idadePessoa1 = 16;
const idadePessoa2 = 39;

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18); // E lógico: retorna true se ambas as condições forem verdadeiras
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18); // Ou lógico: retorna true se pelo menos uma das condições for verdadeira

console.log(!true); // Negação: inverte o valor booleano (true vira false e vice-versa)

console.log(!(idadePessoa1 >= 18)); // Negação aplicada a uma expressão