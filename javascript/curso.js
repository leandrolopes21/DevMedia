let cursos_idiomas = [
    {id: 1, nome: "Inglês", preco: 2500, carga_horaria: 160},
    {id: 2, nome: "Espanhol", preco: 1500, carga_horaria: 110},
    {id: 3, nome: "Francês", preco: 3600, carga_horaria: 200},
    {id: 4, nome: "Chinês", preco: 5500, carga_horaria: 400},
    {id: 5, nome: "Alemão", preco: 3800, carga_horaria: 230}
];

for (let curso of cursos_idiomas) {

    let nome_curso = curso.nome;
    let preco_curso = curso.preco;
    let carga = curso.carga_horaria;
    let valor = preco_curso / carga;

    console.log("\nNome do curso: " + nome_curso);
    console.log("Carga horária do curso: " + carga + " horas");
    console.log("Preço do curso: R$ " + preco_curso + ",00");
    
    if (valor <= 15) {

        console.log("Hora/aula inferior ou igual a R$15,00");

    } else if (valor >= 15) {

        console.log("Hora/aula superior ou igual a R$15,00");

    } else {
        
        console.log("Hora/aula igual a R$15,00");

    }
}