function validarIdade(validar) {

    let voto;

    if (validar < 16) {
        voto = 'Não pode votar';
    } else if (validar >= 16 && validar < 18) {
        voto = 'Votar é de sua escolha!';
    } else {
        voto = 'Obrigatório votar!';
    }

    return voto;
}

export default validarIdade;