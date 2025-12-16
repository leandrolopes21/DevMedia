const hoje = new Date();
const minutosFuso = hoje.getTimezoneOffset();

console.log('\n*** Data de hoje: ' + hoje + ' ***');
console.log('*** Seu horário possui: ' + minutosFuso + ' minutos de diferença, em relação ao fuso-horário ***\n');