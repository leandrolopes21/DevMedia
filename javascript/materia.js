// Código para imprimir as matérias onde concluído for verdadeiro
const tecnologias = [
    { materia: "JavaScript", concluido: true },
    { materia: "React Native", concluido: false },
    { materia: "React", concluido: true },
    { materia: "Vue.js", concluido: true },
    { materia: "Angular", concluido: false }
];

for ( let i in tecnologias ) {
    if ( tecnologias[i].concluido ) {
        console.log(tecnologias[i].materia);
    }
}