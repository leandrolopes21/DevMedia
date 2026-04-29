// let tecnologia = "JavaScript";

// console.log(tecnologia[1]);
// console.log(tecnologia[8]);
// console.log(tecnologia[5]);

let nome = "Jackeline";

let texto = `${nome} é muito legal!`;

let novoTexto = texto.replace("legal", "simpática");

console.log(novoTexto);
console.log(novoTexto.length);

if (novoTexto.length > 20) {
    console.log("Texto longo!");
} else {
    console.log("Texto curto!");
}