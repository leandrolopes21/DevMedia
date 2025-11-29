// Abaixo estão algumas das funções (métodos) nativas mais comuns para Arrays em JavaScript.

/*
================================================================
 1. MÉTODOS QUE MODIFICAM O ARRAY ORIGINAL (MUTATOR METHODS)
================================================================
*/

// push(): Adiciona um ou mais elementos ao final do array e retorna o novo comprimento.
let frutas = ['maçã', 'banana'];
frutas.push('laranja'); // frutas agora é ['maçã', 'banana', 'laranja']
console.log('push:', frutas);

// pop(): Remove o último elemento de um array e retorna aquele elemento.
let ultimaFruta = frutas.pop(); // ultimaFruta é 'laranja', frutas agora é ['maçã', 'banana']
console.log('pop:', frutas, '- removido:', ultimaFruta);

// shift(): Remove o primeiro elemento de um array e retorna aquele elemento.
let primeiraFruta = frutas.shift(); // primeiraFruta é 'maçã', frutas agora é ['banana']
console.log('shift:', frutas, '- removido:', primeiraFruta);

// unshift(): Adiciona um ou mais elementos no início de um array e retorna o novo comprimento.
frutas.unshift('morango', 'uva'); // frutas agora é ['morango', 'uva', 'banana']
console.log('unshift:', frutas);

// splice(): Altera o conteúdo de um array removendo, substituindo ou adicionando elementos.
// splice(índice_inicial, quantidade_a_remover, item1, item2, ...)
let meses = ['Jan', 'Mar', 'Abr', 'Mai'];
meses.splice(1, 0, 'Fev'); // Adiciona 'Fev' no índice 1. meses agora é ['Jan', 'Fev', 'Mar', 'Abr', 'Mai']
console.log('splice (add):', meses);
meses.splice(3, 1, 'Abril'); // Substitui 1 elemento no índice 3. meses agora é ['Jan', 'Fev', 'Mar', 'Abril', 'Mai']
console.log('splice (replace):', meses);

// sort(): Ordena os elementos do array. Por padrão, a ordenação é feita em ordem alfabética (string).
let numeros = [40, 100, 1, 5, 25, 10];
numeros.sort(); // Ordenação como string: [1, 10, 100, 25, 40, 5]
console.log('sort (string):', numeros);
numeros.sort((a, b) => a - b); // Ordenação numérica correta: [1, 5, 10, 25, 40, 100]
console.log('sort (numérico):', numeros);

// reverse(): Inverte a ordem dos elementos do array.
let letras = ['a', 'b', 'c'];
letras.reverse(); // letras agora é ['c', 'b', 'a']
console.log('reverse:', letras);

/*
================================================================
 2. MÉTODOS QUE RETORNAM UM NOVO ARRAY OU VALOR (ACCESSOR/ITERATION)
================================================================
*/

// map(): Cria um novo array com os resultados da chamada de uma função para cada elemento do array.
const nums = [1, 2, 3];
const dobrados = nums.map(num => num * 2); // dobrados é [2, 4, 6], nums não é modificado.
console.log('map:', dobrados);

// filter(): Cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
const idades = [12, 20, 35, 8];
const adultos = idades.filter(idade => idade >= 18); // adultos é [20, 35]
console.log('filter:', adultos);

// reduce(): Executa uma função "redutora" para cada elemento do array, resultando num único valor de retorno.
const soma = nums.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0); // soma é 6
console.log('reduce:', soma);

// concat(): Retorna um novo array que é a concatenação de dois ou mais arrays.
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = arr1.concat(arr2); // arr3 é [1, 2, 3, 4]
console.log('concat:', arr3);

// slice(): Retorna uma cópia de parte de um array em um novo array. O original não é modificado.
// slice(índice_inicial, índice_final (não incluso))
const animais = ['gato', 'cachorro', 'pato', 'coelho', 'peixe'];
const domesticos = animais.slice(0, 4); // domesticos é ['gato', 'cachorro', 'pato', 'coelho']
console.log('slice:', domesticos);

// join(): Junta todos os elementos de um array em uma string.
const elementos = ['Fogo', 'Água', 'Ar'];
const stringElementos = elementos.join(' - '); // stringElementos é "Fogo - Água - Ar"
console.log('join:', stringElementos);

/*
================================================================
 3. MÉTODOS DE ITERAÇÃO (NÃO RETORNAM NOVO ARRAY)
================================================================
*/

// forEach(): Executa uma função para cada elemento do array. Não retorna valor.
console.log('forEach:');
frutas = ['maçã', 'banana', 'laranja'];
frutas.forEach(fruta => {
    console.log('  - ' + fruta);
});

/*
================================================================
 4. MÉTODOS DE BUSCA
================================================================
*/

// find(): Retorna o valor do primeiro elemento do array que satisfizer a função de teste. Caso contrário, undefined é retornado.
const numeroEncontrado = numeros.find(num => num > 20); // numeroEncontrado é 25
console.log('find:', numeroEncontrado);

// findIndex(): Retorna o índice do primeiro elemento em um array que satisfaz a função. Caso contrário, retorna -1.
const indiceEncontrado = idades.findIndex(idade => idade > 30); // indiceEncontrado é 2
console.log('findIndex:', indiceEncontrado);

// includes(): Determina se um array contém um determinado elemento, retornando true ou false.
const temBanana = frutas.includes('banana'); // temBanana é true
console.log('includes:', temBanana);

// indexOf(): Retorna o primeiro índice em que um dado elemento pode ser encontrado no array, ou -1 se não estiver presente.
const indiceBanana = frutas.indexOf('banana'); // indiceBanana é 1
console.log('indexOf:', indiceBanana);

// some(): Testa se ao menos um dos elementos no array passa no teste implementado pela função. Retorna booleano.
const temAdulto = idades.some(idade => idade >= 18); // temAdulto é true
console.log('some:', temAdulto);

// every(): Testa se todos os elementos do array passam pelo teste implementado pela função. Retorna booleano.
const todosAdultos = idades.every(idade => idade >= 18); // todosAdultos é false
console.log('every:', todosAdultos);