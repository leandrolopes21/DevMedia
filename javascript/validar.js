// Complete o código abaixo para validar os caracteres da variável 'usuario':

// 'validaCampo' será true caso os caracteres de 'usuario' seja menor ou igual à 'limiteChar'.
// Verifique se 'validaCampo' é verdadeiro para poder imprimir a mensagem no terminal.

const usuario = 'Fabiana Teles';
const limiteChar = 10;

const validaCampo = ( usuario.length <= limiteChar ) && true;

if ( validaCampo ) {
    console.log('Dados válidos;')
} else {
    console.log('O limite de caracteres é: ' + limiteChar);
}