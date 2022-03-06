function fazerContas() {
    //atribuir os valores digitados as variaveis
    let primeiroValor = prompt("Digite o primeiro valor");
    let segundoValor = prompt("Digite o segundo valor");

    //converter os valores atribuidos, pois prompt sempre retorna uma string
    primeiroValor = Number(primeiroValor);
    segundoValor = Number(segundoValor);

    //variaveis que são atribuidas com o resultado de operações aritméticas
    const soma = primeiroValor + segundoValor;
    const div = (primeiroValor / segundoValor).toFixed(3);
    const sub = primeiroValor - segundoValor;
    const mult = primeiroValor * segundoValor;

    alert(`Os valores são: \nSoma: ${soma} \nDivisão: ${div} \nSubtração: ${sub} \nMultiplicação: ${mult}`);
    

}

//chamada da função
fazerContas();

