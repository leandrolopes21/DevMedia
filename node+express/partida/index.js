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