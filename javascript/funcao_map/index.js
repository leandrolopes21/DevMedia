const numeros = [3, 5, 7, 11, 14,20];
const dobro = numeros.map(numero => dobrar(numero));
const triplo = numeros.map(numero => triplicar(numero));

function dobrar(numero) {
    return numero * 2;
}

function triplicar(numero) {
    return numero * 3;
}

console.log('Chamando a função dobrar', dobro);
console.log('Chamando a função triplicar', triplo);

// A função nativa map cria um novo array, a partir do original

// const nomes = ["Leandro", "Marize", "Lucas"];
// const nomeSobreNome = nomes.map(nome => nome + " Lopes");

// console.log(nomeSobreNome);