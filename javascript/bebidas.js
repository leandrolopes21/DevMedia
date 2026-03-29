const convidados = [
    { nome: "Leandro", cerveja: true },
    { nome: "Lucas", cerveja: false },
    { nome: "Marize", cerveja: false },
    { nome: "Teodoro", cerveja: true },
    { nome: "Guilherme", cerveja: false },
    { nome: "Sonia", cerveja: false }
];

let totalConvidados = convidados.length;
let bebemCerveja = 0;
let bebemRefri = 0;

for ( const convidado of convidados ) {

    if ( convidado.cerveja) {

        bebemCerveja++;
    } else {

        bebemRefri++;
    }
}

console.log("\nTotal de convidados: " + totalConvidados);
console.log("Convidados que bebem cerveja: " + bebemCerveja);
console.log("Convidados que bebem refrigerante: " + bebemRefri);
console.log("\n");