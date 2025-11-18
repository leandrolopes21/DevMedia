// 1. Seleciona os elementos do HTML fora da função para melhor performance.
const input1 = document.getElementById('nota1');
const input2 = document.getElementById('nota2');
const input3 = document.getElementById('nota3');
const input4 = document.getElementById('nota4');
const botaoMedia = document.getElementById('botao');
const elementoResultado = document.getElementById('resultado');

// 2. Função para calcular e exibir o status do aluno.
function calcularMedia() {

    // Pega os valores dos inputs e converte para número.
    const nota1 = Number(input1.value);
    const nota2 = Number(input2.value);
    const nota3 = Number(input3.value);
    const nota4 = Number(input4.value);

    // 3. Validação: verifica se algum campo está vazio.
    if (input1.value.trim() === "" || input2.value.trim() === "" || input3.value.trim() === "" || input4.value.trim() === "") {
        alert("Por favor, preencha todas as notas!");
        return; // Interrompe a função se a validação falhar.
    }

    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    let statusFinal;

    if (media >= 6) {
        statusFinal = "Aprovado!";
    } else {
        statusFinal = "Reprovado!";
    }

    // 4. Exibe o resultado na página HTML.
    // A mensagem inclui a média calculada para dar mais feedback ao usuário.
    elementoResultado.innerHTML = `Média: ${media.toFixed(1)} - ${statusFinal}`;
}

// 5. Adiciona o "ouvinte de evento" ao botão.
// Quando o botão for clicado, a função 'calcularMedia' será executada.
botaoMedia.addEventListener('click', calcularMedia);

// O código abaixo foi removido pois sua lógica foi movida para dentro da função.
// resultado.innerHTML = resultadoMedia;

// console.log(`Aluno 1: ${status_aluno}`);