function transformaFrase(frase) {
    // Divide a string original em um array de palavras, usando o espaço como separador
    let palavras = frase.split(' '); 
    // Variável que irá armazenar a frase final após a transformação
    let novaFrase = '';

    // Itera sobre cada palavra presente no array
    for (let palavra of palavras) {
        // Se não for a primeira palavra da nova frase, adiciona um espaço antes da próxima
        if (novaFrase !== '') {
            novaFrase += ' ';
        }

        // Pega a primeira letra da palavra ([0]), coloca em maiúsculo
        // e concatena com o restante da palavra a partir do segundo caractere (substring(1))
        novaFrase += palavra[0].toUpperCase() + palavra.substring(1);
    }

    // Retorna a frase completa com as iniciais em maiúsculo
    return novaFrase;
}

console.log(transformaFrase('Eu gosto de estudar programação com javascript'));

/*
// Versão moderna e concisa utilizando métodos funcionais:
function transformaFrase(frase) {
    return frase
        .split(' ') // Divide em array
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)) // Transforma cada item
        .join(' '); // Junta o array em uma string
}
*/