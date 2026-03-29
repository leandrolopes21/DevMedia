const frutas = ['maçã', 'banana', 'laranja', 'limao'];

console.log('\n---Usando for..in Itera sobre CHAVES/Índices---\n') // Itera sobre CHAVES/Índices

for (let item in frutas) {
    // Item será 0, 1, 2, 3 (os índices)
    console.log(`Índice: ${item} | Valor ${frutas[item]}`);
}

console.log('\n---Usando for..of (Itera sobre valores)---\n')

for (let item of frutas) {
    // Item será 'maçã', 'banana', 'laranja', 'limao' (os valores)
    console.log(`Valor ${item}`);
}
console.log('\n');