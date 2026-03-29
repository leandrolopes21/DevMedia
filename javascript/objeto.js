// Declaração do objeto aluno_academia
var aluno_academia = {
    id: 10,
    nome: "Leandro Lopes",
    altura: 1.71,
    peso: 75
};

// Declaração das variáveis que armazenam dados do aluno, provenientes do objeto aluno_academia
var nome_aluno = aluno_academia.nome;
var peso_aluno = aluno_academia.peso;
var altura_aluno = aluno_academia.altura;

// Declaração da variável imc_aluno, que armazena o valor do imc
var imc_aluno = peso_aluno / (altura_aluno * altura_aluno);

// Exibindo na tela seu valor
console.log("O IMC do aluno é de: " + imc_aluno.toFixed(2));

// Estrutura condicional sobre os valores possíveis de grau do imc
if (imc_aluno < 18.5) {
    console.log("O aluno " + nome_aluno + " está abaixo do peso!");
} else if (imc_aluno >= 18.5 && imc_aluno <= 24.99) {
    console.log("O aluno " + nome_aluno + " está com peso normal!");
} else {
    console.log("O aluno " + nome_aluno + " está acima do peso!");
}