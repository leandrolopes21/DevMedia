const funcionarios = [
    {nome: "Marize", salario: 1500},
    {nome: "Lucas", salario: 2000},
    {nome: "Leandro", salario: 1200},
    {nome: "Sonia", salario: 2650},
    {nome: "Teodoro", salario: 3245},
    {nome: "Guilherme", salario: 5000},
];

// Exibir salario por condição menor que 2050
// const salario = funcionarios.filter(funcionario => funcionario.salario < 2050);

/**
 * Calcula a soma total dos salários utilizando o método reduce.
 * O acumulador (total) começa em 0.
 */
const totalSalarios = funcionarios.reduce((total, funcionario) => total + funcionario.salario, 0);

console.log(`A soma total dos salários é: R$ ${totalSalarios.toFixed(2)}`);