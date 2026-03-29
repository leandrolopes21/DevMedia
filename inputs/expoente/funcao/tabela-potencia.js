// import entradaDados from 'readline-sync';
// let base = entradaDados.question('Digite o valor da base: ');

let base = document.getElementById('base');
let resposta = document.getElementById('resposta');

let botao = document.getElementById('btn-calcular');
botao.addEventListener('click', tabelaPotencia);

function tabelaPotencia() {

    resposta.innerHTML = '';

    let contador = 0;
    let tabela = '';
    let num = Number(base.value);

    while (contador <= 10) {

        tabela += `<div>Resposta: ${num} ^ ${contador} = ${Math.pow(num, contador)}</div>`;
        contador++;
    }

    resposta.innerHTML = tabela;


    // return tabela;
}

// let resultadoTabela = tabelaPotencia();
// resposta.innerHTML = resultadoTabela;

// console.log(resultadoTabela);