const caixa = document.getElementById('caixa');
const texto = document.getElementById('texto');
const resposta = document.getElementById('texto2');
const botao = document.getElementById('btn');
botao.addEventListener('click', function() {
    caixa.classList.toggle('caixa-alternada');
    resposta.classList.toggle('texto-alternado');
    resposta.innerHTML = 'Só impressão sua! Hahaha!!';
});