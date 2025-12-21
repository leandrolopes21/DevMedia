const listaDeFrutas = [
    'Pera', 'Banana', 'Laranja', 'Abacaxi', 'Manga', 'Uva', 'Abacate', 'Jaca', 'Caju', 'Melancia', 'Carambola', 'Kiwi', 'Goiaba', 'Cereja', 'Morango', 'Maracujá', 'Pêssego', 'Pequi', 'Pitanga', 'Tangerina', 'Tamarindo', 'Caju', 'Manga', 'Jambo', 'Jabuticaba', 'Groselha', 'Figo', 'Framboesa', 'Caqui', 'Cacau', 'Amora'
];

// Seleciona uma fruta aleatória da lista gerando um índice inteiro randômico baseado no tamanho do array
/*
 * Math.random() gera um número decimal entre 0 e 1.
 * Multiplicamos pelo tamanho da lista para obter um valor proporcional.
 * Math.floor() arredonda para baixo para obter um índice inteiro válido.
 */
const palavraSelecionada = listaDeFrutas[Math.floor(Math.random() * listaDeFrutas.length)];

console.log(palavraSelecionada);

let primeiraLetra = palavraSelecionada[0];
let underline = '-'.repeat(palavraSelecionada.length - 1);
let palavraOculta = primeiraLetra + underline;

console.log(palavraOculta);

function atualizarPalavraOculta(palavraOculta, letraDigitada, palavraEscolhida) {
    let palavraOcultaArray = palavraOculta.split('');

    for (let i = 0; i < palavraEscolhida.length; i++) {
        if(letraDigitada === palavraEscolhida[i]) {
            palavraOcultaArray[i] = letraDigitada;
        }
    }

    return palavraOcultaArray.join('');
}

function validarLetraDigitada(letraDigitada) {
    if(letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)) {
        return true;
    } else {
        return false;
    }
}

let statusJogo