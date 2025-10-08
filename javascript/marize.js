var resposta = document.getElementById("resposta");
var botao = document.getElementById("enter");
botao.addEventListener("click", mostrarCuriosidade);

function mostrarCuriosidade() {

var curiosidades_marize = [
    { titulo: "Perfumes", conteudo: "Minhas fragrâncias preferidas são flor de cerejeira L'OCITANNE e Florata in blue o Boticário."},
    { titulo: "Comidas", conteudo: "Pão, macarrão com carne e vegetais."},
    { titulo: "Passeio", conteudo: "Parques, praia e caminhada."},
    { titulo: "Saúde", conteudo: "Tratando as varizes no médico vascular."},
    { titulo: "Estudos", conteudo: "Tudo sobre radiestesia e Radiônica."},
    { titulo: "Trabalho", conteudo: "Atendimento aos clientes e administração da empresa."},
    { titulo: "Família", conteudo: "Amo meu marido, meu filho e o Felipe (peixe)"}
];

var tamanho_colecao = curiosidades_marize.length;
var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);
var curiosidade_escolhida = curiosidades_marize[numero_sorteado];
var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

/* Exibir a curiosidade escolhida no console
console.log("CURIOSIDADES SOBRE MARIZE");
console.log("Título: " + titulo_curiosidade);
console.log("Conteúdo: " + conteudo_curiosidade);
*/

resposta.innerHTML = `**${titulo_curiosidade}** - ${conteudo_curiosidade}`;

}

