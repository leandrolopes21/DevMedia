// const numeros = [2, 4, 7, 11, 35, 100, 67, 70];

// // Usamos Math.min com o operador spread (...) para encontrar o menor valor no array.
// const menorNumero = Math.min(...numeros);

// console.log(`O menor número do array é: ${menorNumero}`); // Indica o menor número do array

// // Usamos Math.max com o operador spread (...) para encontrar o maior valor no array.
// const maiorNumero = Math.max(...numeros);

// console.log(`O maior número do array é: ${maiorNumero}`); // Indica o maior número do array

const numeros = [2, 4, 7, 11, 35, 100, 67, 70];
const dobrar = numeros.map((numero) => numero * 2);
const exponecial = numeros.map((numero) => Math.pow(numero, 2));
const expoFiltrado = exponecial.filter((expoente) => expoente < 50);

console.log('Números dobrados');
dobrar.forEach(numero => console.log(numero));

console.log('Exponencial');
exponecial.forEach(numero => console.log(numero));

console.log('Exponencial filtrado menor que 50: ' + expoFiltrado);