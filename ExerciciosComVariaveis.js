const nome = "Gustavo Montenegro";
const idade = 26;
const alturaEmM = 1.90;
let peso = 105;
let indiceMassaCorporal = (peso / Math.pow(alturaEmM, 2)).toFixed(2);
let anos;
const anoDeNascimento = 1996;

if (idade == 1) {
    anos = "ano";
} else {
    anos = "anos";
}

console.log(`${nome} tem ${idade} ${anos}, pesa ${peso} KG, 
tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal} e ${nome} 
nasceu em ${anoDeNascimento}.`);

