// Função que atualiza a palavra oculta
function atualizarPalavraOculta(palavraOculta, letraDigitada, palavraSelecionada) {
    let palavraOcultaArray = palavraOculta.split(''); // Converte a palavra oculta em um array de caracteres

    for (let i = 0; i < palavraSelecionada.length; i++) { // Loop que continua até o tamanho final da palavra escolhida
        if (palavraSelecionada[i] === letraDigitada) { // Se na palavra selecionada houver a letra digitada
            palavraOcultaArray[i] = letraDigitada; // Substitui a letra na posição i
        }
    }

    return palavraOcultaArray.join(''); // Retorna o array de caracteres convertido em string
}