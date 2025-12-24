import formataIMC from "./formatacaoDados.js";

function calcularIMC(peso, altura) {

    let imc = peso / (altura * altura);
    let imcFormatado = formataIMC(imc);
    
   return imcFormatado;
}

export default calcularIMC;