let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

let varD = 'D'; //E
let varE = 'E'; //F
let varF = 'F'; //D

/**
 * Proposta do Exercício:
 * 
 * varA recebe o valor de varB
 * varB recebe o valor de varC
 * varC recebe o valor varA
 */

//Uma solução apresentada em aula
const varATemporaria = varA;
varA = varB;
varB = varC;
varC = varATemporaria;

//outra forma proposta
[varD, varE, varF] = [varE, varF, varD];

console.log(varA, varB, varC);
console.log(varD, varE, varF);