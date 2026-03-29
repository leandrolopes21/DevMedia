// Função tradicional
/*
function retorna_media(nota1, nota2) {

    let media = (nota1 + nota2) / 2;
    return media;
}

let media_aluno = retorna_media(9, 8);
console.log(`A média do aluno é: ${media_aluno}`);
*/

// Arrow function
/*
const retorna_media = (nota1, nota2) => {
    
    let media = (nota1 + nota2) / 2;
    return media;
}

let media_aluno = retorna_media(9, 8);
console.log(`A média do aluno é: ${media_aluno}`);
*/

// Arrow function reduzida a uma linha
const retorna_media = (nota1, nota2) => (nota1 + nota2) / 2;

let media_aluno = retorna_media(8, 8);
console.log(`A média do aluno é: ${media_aluno}`);