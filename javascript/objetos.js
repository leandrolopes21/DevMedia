// Objeto
var paciente = {
    id: 1,
    nome: "Leandro Lopes",
    idade: 40,
    peso: 75,
    altura: 1.71
};

var nome_paciente = paciente.nome;
var peso_paciente = paciente.peso;
var altura_paciente = paciente.altura;

var imc = peso_paciente / (altura_paciente * altura_paciente);

console.log("IMC: " + imc.toFixed(2));

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.99) {
    console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.99){
    console.log("Sobrepeso");
} else if (imc >= 30 && imc <= 34.99) {
    console.log("Obesidade grau I");
} else if (imc >= 35 && imc <= 39.99) {
    console.log("Obesidade grau II");
} else if (imc >= 40) {
    console.log("Obesidade grau III");
} else {
    console.log("Não foi possível calcular o IMC");
}

// Acessando propriedades do objeto
/*
console.log("Nome: " + paciente.nome);
console.log("Idade: " + paciente.idade);
console.log("Peso: " + paciente.peso);
console.log("Altura: " + paciente.altura);
*/