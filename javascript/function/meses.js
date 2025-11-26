let meses = [
    {mes: "Janeiro", numero: 1},
    {mes: "Fevereiro", numero: 2},
    {mes: "Março", numero: 3},
    {mes: "Abril", numero: 4},
    {mes: "Maio", numero: 5},
    {mes: "Junho", numero: 6},
    {mes: "Julho", numero: 7},
    {mes: "Agosto", numero: 8},
    {mes: "Setembro", numero: 9},
    {mes: "Outubro", numero: 10},
    {mes: "Novembro", numero: 11},
    {mes: "Dezembro", numero: 12}
];

let data = new Date();
let apresentaData = data.getFullYear();

for (let indice of meses) {
    
    let mostrar = indice.mes;
    console.log(`${mostrar} de ${apresentaData}`);
}