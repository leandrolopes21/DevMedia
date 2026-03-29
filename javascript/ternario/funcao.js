let idade = 27;
/*

function verificaMaiorIdade(idade) {
    let resultado;

    if (idade > 18) {
        resultado = 'Maior de idade';
    } else {
        resultado = 'Menor de idade';
    }

    return resultado;
}

console.log(verificaMaiorIdade(idade));
*/

// export default verificaMaiorIdade();

const verificaMaiorIdade = (idade) => {
    
    let resultado = (idade > 18) ? 'Maior de idade' : 'Menor de idade';

    return resultado;
}

console.log(verificaMaiorIdade(idade));