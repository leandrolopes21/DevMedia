import retornaMateriaDia, { materia } from "./retornaMateria.js";

let data = new Date();
let diaSemana = data.getDay();

let dataOptions = {
    weekday: 'long'
};

if (diaSemana >= 0 && diaSemana <= 5) {

    let materiaDoDia = retornaMateriaDia(diaSemana);

    console.log(`Hoje é ${data.toLocaleDateString('pt-BR', dataOptions)}`);
    console.log(`Matéria de hoje: ${materiaDoDia}\n`);
    console.log(`Quantidade de matérias: ${materia.length}\n`);

} else {

    console.log('Hoje não tem aula!');
    console.log(`Quantidade de matérias: ${materia.length}\n`);
}