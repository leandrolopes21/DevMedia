const pessoas = [
  { nome: 'Ana Silva', dataNascimento: '1990/05/15', nacionalidade: 'Brasil' },
  { nome: 'John Smith', dataNascimento: '1985/11/22', nacionalidade: 'EUA' },
  { nome: 'Marie Curie', dataNascimento: '1992/03/10', nacionalidade: 'França' },
  { nome: 'Sato Hiroshi', dataNascimento: '1988/07/30', nacionalidade: 'Japão' },
  { nome: 'Carlos Gomez', dataNascimento: '1995/01/12', nacionalidade: 'Espanha' },
  { nome: 'Elena Petrova', dataNascimento: '1991/09/05', nacionalidade: 'Rússia' },
  { nome: 'Hans Müller', dataNascimento: '1980/12/25', nacionalidade: 'Alemanha' },
  { nome: 'Luigi Rossi', dataNascimento: '1993/06/18', nacionalidade: 'Itália' },
  { nome: 'Sofia Oliveira', dataNascimento: '1997/02/28', nacionalidade: 'Brasil' },
  { nome: 'Fatima Al-Sayed', dataNascimento: '1989/10/14', nacionalidade: 'Egito' }
];

const buscarData = pessoas.filter(pessoa => pessoa.dataNascimento == '1990/05/15');

buscarData.forEach(pessoa => {
  console.log(`Nome: ${pessoa.nome}`);
  console.log(`Data de nascimento: ${pessoa.dataNascimento}`);
  console.log(`Nacionalidade: ${pessoa.nacionalidade}`);
});