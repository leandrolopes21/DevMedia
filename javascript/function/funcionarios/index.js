import funcionarios from "./dadosFuncionarios.js";
import { filtraFuncionariosIdade, retornaNomesFuncionarios, imprimeNomesFuncionarios } from "./trataDadosFuncionarios.js";

let funcionariosIdade = filtraFuncionariosIdade(funcionarios);
let nomesFuncionarios = retornaNomesFuncionarios(funcionariosIdade);
imprimeNomesFuncionarios(nomesFuncionarios);