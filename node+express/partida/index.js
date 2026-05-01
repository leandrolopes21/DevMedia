/*
function jogoPedraPapelTesoura(opcaoJogador) {
  const opcoesDeJogada = ['pedra', 'papel', 'tesoura'];
  const opcaoCPU = opcoesDeJogada[Math.floor(Math.random() * opcoesDeJogada.length)];

  return (!opcoesDeJogada.find(opcao => opcao === opcaoJogador)) 
    ? 'Opção inválida. Escolha entre pedra, papel ou tesoura.'
    : (opcaoJogador === opcaoCPU)
      ? `Empate! Ambos escolheram ${opcaoJogador}.`
      : (
          (opcaoJogador === 'pedra' && opcaoCPU === 'tesoura') ||
          (opcaoJogador === 'papel' && opcaoCPU === 'pedra') ||
          (opcaoJogador === 'tesoura' && opcaoCPU === 'papel')
        )
        ? `Vitória! Você escolheu ${opcaoJogador} e a CPU escolheu ${opcaoCPU}.`
        : `Derrota! Você escolheu ${opcaoJogador} e a CPU escolheu ${opcaoCPU}.`;
}

// Teste
console.log(jogoPedraPapelTesoura('pedra'));
*/


// Versão com condição padrão if-else

function jogoPedraPapelTesoura(jogador) {
  const opcoesDeJogadas = ['pedra', 'papel', 'tesoura'];
  const computador = opcoesDeJogadas[Math.floor(Math.random() * opcoesDeJogadas.length)];

  if (jogador === 'pedra' || jogador === 'papel' || jogador === 'tesoura') {
    if (jogador === computador) {
      return `Empate! Ambos escolheram pedra.`;
    } else if (
      (jogador === 'pedra' && computador === 'tesoura') ||
      (jogador === 'papel' && computador === 'pedra') ||
      (jogador === 'tesoura' && computador === 'papel')
    ) {
      return `Vitória! ${jogador} vence ${computador}.`;
    } else {
      return `Derrota! ${computador} vence ${jogador}.`;
    }
  } else {
    return 'Opção inválida. Escolha entre pedra, papel ou tesoura.';
  }
}

console.log(jogoPedraPapelTesoura('pedra'));