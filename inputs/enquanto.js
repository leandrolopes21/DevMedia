/*
let contador = 0;

while (contador < 0) {
    // bloco de código não executa, pois está após a condição - while (contador < 0)
    console.log(contador);
    contador++;
}

*/

let contador = 0;

do {
    // bloco de código executado ao menos uma vez, pois está antes da condição - while (contador < 0)
    console.log(contador);
    contador++;
    
} while (contador < 0);