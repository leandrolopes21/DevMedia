// Variável dataUltimoAcesso armazena uma data pré-determinada
const dataUltimoAcesso = new Date('2025/11/13 09:00:00');
// Variável dataAtual captura a data e hora atual do sistema
const dataAtual = new Date();

/*
Definição da variável hora
Primeiro pegar a data atual do sistema e armazenar na variável dataAtual
Em seguinda utilizar método getHours() para armazenar a hora atual na variável hora
*/
const hora = dataAtual.getHours();

// Utilizado o método getTime() para armazenar os valores timestamp das datas
const timeUltimoAcesso = dataUltimoAcesso.getTime();
const timeAtual = dataAtual.getTime();

// Calcular a diferença (em milisegundos) entre a data atual e a data do último acesso
const diferencaTime = timeAtual - timeUltimoAcesso;

// Cálculo da quantidade de milisegundos que uma hora possui e armazenado na variável milisegundosHora
const milisegundosHora = 1000 * 60 * 60; // 1000 (milisegundos) * 60 (segundos) * 60 (minutos) = 1 hora

// Cálculo da quantidade de milisegundos que um dia possui e armazenado na variável milisegundosDia
const milisegundosDia = milisegundosHora * 24; // 1000 (milisegundos) * 60 (segundos) * 60 (minutos) * 24 (horas) = 1 dia

let msg = "";

// Verificando é é dia, tarde ou noite
if ( hora < 6 || hora >= 18 ) {
    msg = '\nBoa noite!\n';
} else if ( hora >= 6 && hora < 12 ) {
    msg = '\nBom dia!\n';
} else {
    msg = '\nBoa tarde!\n';
}

// Verificando quanto tempo se passou desde o último acesso
if ( diferencaTime > milisegundosDia ) {
    msg += "Você está ausente há dias!!!\n";
} else if ( diferencaTime > milisegundosHora ) {
    msg += "Você está ausente há horas!!!\n";
} else {
    msg += "Que bom que ainda está aqui!\n";
}

// Imprimindo na tela a mensagem correspondente
console.log(msg);