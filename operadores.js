/**
 * preferencias de operadores:
 * todos em parenteses ()
 * **- potenciação
 * * / % - multiplicação, divisão e resto da divisão
 * + - - adição e subtração
 */

let numero1 = 10;
const numero2 = 89;
const numero3 = 12;

numero1 /= 10;

console.log(typeof numero1, numero1);


/**
 * conversões com parseInt, ParseFloat e Number
 */

//parseInt é usado apenas para numeros inteiros
const txtInt = `12`;
const txtEmNumeroInt = parseInt(txtInt);

//parseFloat é usado apenas para numeros decimais
const textFloat = `13.789`; 
const textEmNumeroFloat = parseFloat(textFloat);

//Number não faz distinção entre os tipos primitivos dos numeros, converte todos eles independente do seu tipo
const txtEmNumero = `14.09`
const converteNumber = Number(txtEmNumero);


console.log("ParseInt: " + typeof txtEmNumeroInt, txtEmNumeroInt);
console.log("ParseFloat: " + typeof textEmNumeroFloat, textEmNumeroFloat);
console.log("Number: " + typeof converteNumber, converteNumber);