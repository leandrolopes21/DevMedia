// Declara uma arrow function chamada 'mensagem_boas_vindas'.
// Esta função recebe um parâmetro (argumento) chamado 'texto'.
const mensagem_boas_vindas = (texto) => {
    // Declara uma variável 'mensagem' e atribui a ela o valor do parâmetro 'texto'.
    // O uso de parênteses em '(texto)' é opcional e não altera o resultado.
    let mensagem = (texto);
    // Retorna o valor da variável 'mensagem'.
    // A função basicamente devolve a mesma string que recebeu.
    return mensagem;
}

// Chama a função 'mensagem_boas_vindas' com uma string específica.
// O valor retornado pela função é armazenado na variável 'mensagem_usuario'.
let mensagem_usuario = mensagem_boas_vindas("Olá, seja bem vindo(a) Leandro!!");

// Imprime o conteúdo da variável 'mensagem_usuario' no console.
console.log(mensagem_usuario);