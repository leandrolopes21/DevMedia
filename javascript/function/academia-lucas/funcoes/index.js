import diasDaSemana from "./dadosSemana.js";
import { retornaDiaDaSemana, treinosLucas } from "./funcoes.js";

let campoData = document.getElementById('conteiner-conteudo');
let exibeData = document.createElement('p');
exibeData.setAttribute('id', 'data-atual');
exibeData.appendChild(campoData);

let diaTreinoSemana = retornaDiaDaSemana(diasDaSemana);

exibeData.innerHTML = diaTreinoSemana;