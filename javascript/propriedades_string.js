// Métodos nativos em Javascript para trabalhar com string

// length - obtém o tamanho da string - length é propriedade, não método

// toLowerCase() - altera para letras minúsculas em string
// toUpperCase() - altera para letras maiússculas em string
// trim() - remove espaços em branco no início e fim de uma string
// padStart() - adiciona caracteres no início da string até a quantidade indicada
// padEnd() - adiciona caracteres no final da string até a quantidade indicada
// replace() - substitui partes de uma string
// substring() - retorna partes da string
// indexOf() - procurando substring dentro de string
// split() - quebra um string em substrings menores

let frase = "   Eu amo minha esposa (Marize) e meu filho (Lucas)   ";

let tamanho = frase.length; // length - obtém o tamanho da string
    console.log(tamanho); // 50

let tudoPequeno = frase.toLowerCase(); // toLowerCase() - altera para letras minúsculas em string
    console.log(tudoPequeno); // eu amo minha esposa (marize) e meu filho (lucas)

let tudoGrande = frase.toUpperCase(); // toUpperCase() - altera para letras maiússculas em string
    console.log(tudoGrande); // EU AMO MINHA ESPOSA (MARIZE) E MEU FILHO (LUCAS)

let semEspaco = frase.trim(); // trim() - remove espaços em branco no início e fim de uma string
    console.log(semEspaco); // "Eu amo minha esposa (Marize) e meu filho (Lucas)""

let adicaoInicio = frase.padStart(70, '*'); // padStart() - adiciona caracteres no início da string até a quantidade indicada
    console.log(adicaoInicio); // ******************** Eu amo minha esposa (Marize) e meu filho (Lucas)

let adicaoFinal = frase.padEnd(85, '*'); // padEnd() - adiciona caracteres no final da string até a quantidade indicada
    console.log(adicaoFinal); // Eu amo minha esposa (Marize) e meu filho (Lucas) ***********************************

let substitui = frase.replace("amo", "amo muito"); // replace() - substitui partes de uma string
    console.log(substitui); // Eu amo muito minha esposa (Marize) e meu filho (Lucas)

let buscarSubString = frase.substring(21); // substring() - retorna partes da string
    console.log(buscarSubString); // (Marize) e meu filho (Lucas)

let procurarSubString = frase.indexOf("Lucas"); // indexOf() - procurando substring dentro de string
    console.log(procurarSubString); // 43

let quebraString = frase.split(" "); // split() - quebra um string em substrings menores, nesse caso foi indicado espaço como parâmetro no split(" ")
    console.log(quebraString); // ['   ', 'Eu', 'amo', 'minha', 'esposa', '(Marize)', 'e', 'meu', 'filho', '(Lucas)', '   ']