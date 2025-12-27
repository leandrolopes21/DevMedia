import personagens from "./dadosPersonagens.js";
import verificaProprietario from "./filtraProprietario.js";

let personagensMicrosoft = personagens.filter(verificaProprietario);
personagensMicrosoft.forEach(personagem => {
    console.log(personagem.nome);
});