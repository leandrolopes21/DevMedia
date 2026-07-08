// Validacao para nome e email informados no cadastro
function validaNome(nome) {
    const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;

    const isValid = nome.length >= 2 && regexNome.test(nome);
    return isValid;
}

function validaEmail(email) {
    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const isValid = regexEmail.test(email);
    return isValid;
}

function validaTelefone(telefone) {
    const regexTelefoneBR = /^\(?\d{2}\)?[\s-]?(9\d{4})[\s-]?(\d{4})$/;

    const isValid = regexTelefoneBR.test(telefone);
    return isValid;
}

export function validaUsuario(nome, email, telefone) {
    const nomeValido = validaNome(nome);
    const emailValido = validaEmail(email);
    const telefoneValido = validaTelefone(telefone);

    const usuarioValido = nomeValido && emailValido && telefoneValido;

    if (usuarioValido) {
        return {status: true, mensagem: ''};
    } else {
        return {status: false, mensagem: 'Nome, email ou telefone invalidos!'};
    }
}