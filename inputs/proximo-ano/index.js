// Calcular quantos dias faltam para chegar o dia 01/01/2027

const dataAtual = new Date();
const dataProximoAno = new Date('2027-01-01T00:00');

const timestampAtual = dataAtual.getTime();
const timestampProximoAno = dataProximoAno.getTime();

const calculoTimestamp = timestampProximoAno - timestampAtual;

const segundos = calculoTimestamp / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

const dias = horas / 24;

console.log(`Faltam ${dias} dias para 2027`);