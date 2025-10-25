let numeros = [10, 8, 51, 4, 12, 3, 9, 11, 21, 7, 12, 22, 99];

let total_par = 0;
let total_impar = 0;
let contador = 0;

while (contador < numeros.length) {
    
    if (numeros[contador] % 2 == 0) {
        total_par++;
    } else {
        total_impar++
    }

    contador++;
}

console.log("Total de números pares: " + total_par);
console.log("Total de números ímpares: " + total_impar);