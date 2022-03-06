const nome = prompt("Digite seu Nome Completo");

//perguntas e respostas propostas pelo exercício sobre strings e suas formatações
document.body.innerHTML += `Seu nome é: <strong>${nome}</strong><br />`;
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome.charAt(1)}</strong><br />`;
document.body.innerHTML += `Qual o primeiro índice da letra s no seu nome? <strong>${nome.indexOf("s")}</strong><br />`;
document.body.innerHTML += `Qual o último índice da letra s no seu nome? <strong>${nome.lastIndexOf("s")}</strong><br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(nome.length - 3)}</strong><br />`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(" ", 3)}</strong><br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong><br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong><br />`;