const colecaoNomes = ["Alberto", "Alex", "Sandro", "Roberta"];

// Itera sobre cada índice do array.
for (let indice = 0; indice < colecaoNomes.length; indice++) {
    // Pega o nome na posição atual, converte para maiúsculas e
    // atribui o novo valor de volta à mesma posição no array.
    const nomeMaiusculo = colecaoNomes[indice].toUpperCase();
    colecaoNomes[indice] = nomeMaiusculo;
}

console.log(colecaoNomes);
