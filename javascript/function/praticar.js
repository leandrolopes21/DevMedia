// 1. Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada.
// Em seguida, chame a função e exiba a saudação no console.

function saudacao(nome) {
    return ('Olá ' + nome + '! Como vai?');
}

console.log(saudacao('Leandro'));

// 2. Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18).
// Imprima o resultado no console.

function verificaIdade(idade) {
    return (idade >= 18 ? 'Você é maior de idade!' : 'Você é menor de idade!');
}

console.log(verificaIdade(20));
console.log(verificaIdade(10));

// 3. Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse().
// Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

function verificaPalindromo(palavra) {
    const palavraInvertida = palavra.split('').reverse().join('');
    return palavra.toLowerCase() === palavraInvertida.toLowerCase();
}

console.log(verificaPalindromo('ovo'));
console.log(verificaPalindromo('regata'));
console.log(verificaPalindromo('socos'));
console.log(verificaPalindromo('Osso'));
console.log(verificaPalindromo('reviver'));

// 4. Crie uma função de cálculo financeiro, que recebe valores de taxa de juros e tempo como parâmetros, e calcular juros compostos.

function jurosCompostos(taxa, tempo) {

    let capital = 100;
    let montante = capital * Math.pow((1 + (taxa / 100)), tempo);

    return montante;
}

console.log(jurosCompostos(12, 10).toFixed(2));

// 5. Função para inverter palavras - método padrão string.split('').reverse().join('')

function inverter(palavra) {

    let inverterPalavra = palavra.split('').reverse().join('');
    return inverterPalavra;
}

console.log(`Palavra invertida: ${inverter('Leandro')}`);