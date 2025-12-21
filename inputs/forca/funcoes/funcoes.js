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

function exibirMensagemFimDeJogo(statusJogo) {
    if (statusJogo === 'venceu') {
        console.log('\n----------VOCÊ VENCEU!!----------\n');
    } else {
        console.log('\n----------VOCÊ PERDEU!!----------\n');
    }
}

function jogadasRestantes(erros) {
    return 4 - erros;
}

function validarLetraDigitada(letraDigitada) {
    if(letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)) {
        return true;
    } else {
        return false;
    }
}

function verificarJogoGanho(palavraOculta, palavraSelecionada) {
    if (palavraOculta === palavraSelecionada) {
        return true;
    } else {
        return false;
    }
}

function verificarLetraPresenteNaPalavra(palavraSelecionada, letraDigitada) {
    if (palavraSelecionada.includes(letraDigitada)) {
        return true;
    } else {
        return false;
    }
}

export {
    atualizarPalavraOculta,
    exibirMensagemFimDeJogo,
    jogadasRestantes,
    validarLetraDigitada,
    verificarJogoGanho,
    verificarLetraPresenteNaPalavra
};