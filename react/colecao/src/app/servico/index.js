import { nomes } from "../dados/dados";

export const buscarNomes = (textoDigitado) => {
  return nomes.filter(
    (nome) => nome.toLowerCase().includes(textoDigitado.toLowerCase())
  );
};