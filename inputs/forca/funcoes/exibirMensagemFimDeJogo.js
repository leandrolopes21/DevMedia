function exibirMensagemFimDeJogo(statusJogo) {
    if (statusJogo === 'venceu') {
        console.log('\n----------VOCÊ VENCEU!!----------');
    } else {
        console.log('\n----------VOCÊ PERDEU!!----------');
    }
}