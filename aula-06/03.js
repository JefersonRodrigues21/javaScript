const prompt = require("readline-sync");

const idade = prompt.question("Qual eh a sua idade? ");

const idadeNum = Number(idade);

console.log(idadeNum, typeof idadeNum); //transforma string em number

// Coerção explícita (Conversão Manual)

console.log(Number("x")); // NaN - Not a Number

console.log(String(10), typeof String(10)); // "10" string

console.log(Boolean(-1)); // true

// Coerção implícita

console.log(10 + "10"); // "1010" string - concatenação
console.log("10" + 5); // "105" string - concatenação
console.log(10 - "5"); // 5 number - subtração
console.log(10 * "5"); // 50 number - multiplicação
console.log(10 / "5"); // 2 number - divisão

// Qual será a saída desse código?
let n = 1 + "1"; // "11" string

n = n - 1; // 10 number

console.log(n); // 10

// Qual será a saída desse código?
console.log(2 + 3 + 4 + "5"); // "95" string

// Qual será a saída desse código?
console.log("5" + 2 + 3 + 4); // "5234" string

// Qual será a saída desse código?
console.log("10" - "4" - "3" - 2 + "5"); // "15" string