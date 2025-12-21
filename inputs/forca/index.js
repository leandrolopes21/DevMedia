import entradaDados from 'readline-sync';
import listaDeFrutas from './dados/frutas.js';
import {
    atualizarPalavraOculta,
    exibirMensagemFimDeJogo,
    jogadasRestantes,
    validarLetraDigitada,
    verificarJogoGanho,
    verificarLetraPresenteNaPalavra
} from './funcoes/funcoes.js';

function jogarForca() { // Função principal do jogo

    // Seleciona uma fruta aleatória da lista gerando um índice inteiro randômico baseado no tamanho do array
    /*
     * Math.random() gera um número decimal entre 0 e 1.
     * Multiplicamos pelo tamanho da lista para obter um valor proporcional.
     * Math.floor() arredonda para baixo para obter um índice inteiro válido.
     */
    const palavraSelecionada = listaDeFrutas[Math.floor(Math.random() * listaDeFrutas.length)];

    // console.log(palavraSelecionada);

    // Oculta a palavra escolhida com 'underlines' deixando visível somente a letra inicial
    let primeiraLetra = palavraSelecionada[0];
    let underline = '_'.repeat(palavraSelecionada.length - 1);
    let palavraOculta = primeiraLetra + underline;

    // console.log(palavraOculta);

    let erros = 0;
    let statusJogo = 'andamento'; // Jogo inicia com o status 'andamento'

    console.log(`\n----------JOGO DA FORCA----------`);
    console.log(`\nNome da fruta com ${palavraSelecionada.length} letras:`);

    while (statusJogo === 'andamento') {
    
        console.log(`\nFruta: ${palavraOculta}`);

        const letraDigitada = entradaDados.question('Digite uma letra: ').toLowerCase();

        if (validarLetraDigitada(letraDigitada)) {
            if (verificarLetraPresenteNaPalavra(palavraSelecionada, letraDigitada)) {
                palavraOculta = atualizarPalavraOculta(palavraOculta, letraDigitada, palavraSelecionada);
                if (verificarJogoGanho(palavraOculta, palavraSelecionada)) {
                    statusJogo = 'venceu';
                }
            } else {
                erros++;

                const chances = jogadasRestantes(erros);

                if (chances > 0) {
                    console.log(`OPÇÃO ERRADA! Você ainda tem ${chances} chance(s)!`);
                } else {
                    statusJogo = 'perdeu';
                }
            }
        } else {
            console.log('\nPor favor, digite uma letra válida.');
        }
    }

    exibirMensagemFimDeJogo(statusJogo);
}

jogarForca(); // Inicia o jogo