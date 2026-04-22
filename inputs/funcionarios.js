// CÓDIGO DE EXEMPLO UTILIZANDO ESTRUTURA FOR..OF PARA PERCORRER UMA COLEÇÃO DE OBJETOS

let funcionarios = [
    {id: 1, nome: "Cesar", ramal: "8410", setor: "Projetos"},
    {id: 2, nome: "Eduardo", ramal: "8429", setor: "Projetos"},
    {id: 3, nome: "Leandro", ramal: "8409", setor: "Projetos"},
    {id: 4, nome: "Ana Paula", ramal: "8415", setor: "PCP"},
    {id: 5, nome: "Vagner", ramal: "8420", setor: "Produção"},
    {id: 6, nome: "Paulo Braga", ramal: "8434", setor: "Montagem"},
    {id: 7, nome: "Daniele", ramal: "8424", setor: "Dpto Pessoal"},
    {id: 8, nome: "Angela", ramal: "8418", setor: "Financeiro"},
    {id: 9, nome: "Alessandra", ramal: "8412", setor: "Fiscal"} 
];

for (let funcionario of funcionarios) {

    let nome = funcionario.nome;
    let ramal = funcionario.ramal;
    let setor = funcionario.setor;

    console.log("Nome: " + nome + " - Ramal: " + ramal + " - Setor: " + setor);
}