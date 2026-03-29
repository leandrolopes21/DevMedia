let colaboradores = [
    {id: 0, nome: "Leandro", habilitado: false},
    {id: 1, nome: "Lucas", habilitado: false},
    {id: 2, nome: "Marize", habilitado: true},
    {id: 3, nome: "Freitas", habilitado: false}
];

let contador = 0;
let encontrouHabilitado = false;

while (contador < colaboradores.length) {

    let colaborador = colaboradores[contador];

    if (colaborador.habilitado == true) {

        console.log("Colaborador habilitado: " + colaborador.nome);
        encontrouHabilitado = true;
        break;
    }

    contador++;
}

if (!encontrouHabilitado) {

    console.log("Nenhum colaborador habilitado!");
}