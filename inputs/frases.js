let frases = [
    "A vida trará coisas boas se você tiver paciência", // Posição 0 - dia 1
    "Demonstre amor e alegria em todas as oportunidades", // Posição 1 - dia 2
    "Não compense na ira o que lhe falta na razão", // Posição 2 - dia 3
    "Defeitos e virtudes são apenas dois lados da mesma moeda", // Posição 3 - dia 4
    "A maior de todas as torres começa no solo", // Posição 4 - dia 5
    "Acredite em você mesmo e o universo conspirará a seu favor", // Posição 5 - dia 6
    "Seja a mudança que você deseja ver no mundo", // Posição 6 - dia 7
    "O sucesso não é acidental, é resultado de esforço e dedicação", // Posição 7 - dia 8
    "Aprenda com o passado, viva o presente e sonhe com o futuro", // Posição 8 - dia 9
    "Sua criatividade é ilimitada, explore novos horizontes", // Posição 9 - dia 10
    "A jornada de mil quilômetros começa com um único passo", // Posição 10 - dia 11
    "A sorte favorece a mente preparada", // Posição 11 - dia 12
    "Seja corajoso, mesmo quando estiver com medo", // Posição 12 - dia 13
    "A amizade é o maior tesouro da vida", // Posição 13 - dia 14
    "A compaixão é a linguagem universal do coração", // Posição 14 - dia 15
    "Sorria, a felicidade é contagiante", // Posição 15 - dia 16
    "A cada desafio, surge uma oportunidade de crescimento", // Posição 16 - dia 17
    "O sucesso é a soma de pequenos esforços repetidos dia após dia", // Posição 17 - dia 18
    "A persistência é o caminho do êxito", // Posição 18 - dia 19
    "A compaixão é a linguagem universal do coração", // Posição 19 - dia 20
    "Seja grato pelo que tem, e mais virá até você", // Posição 20 - dia 21
    "Suas escolhas moldam seu destino, escolha sabiamente", // Posição 21 - dia 22
    "Cada novo dia é uma página em branco, escreva uma boa história", // Posição 22 -dia 23
    "O amor é a força mais poderosa do universo", // Posição 23 - dia 24
    "A melhor maneira de prever o futuro é criá-lo", // Posição 24 - dia 25
    "Seja gentil com cada pessoa que você encontrar", // Posição 25 - dia 26
    "A verdadeira beleza está na simplicidade", // Posição 26 - dia 27
    "O conhecimento é poder, compartilhe-o com o mundo", // Posição 27 - dia 28
    "A gratidão transforma o que temos em suficiente", // Posição 28 - dia 29
    "A cada desafio, surge uma oportunidade de crescimento", // Posição 29 - dia 30
    "O sucesso é a soma de pequenos esforços repetidos dia após dia" // Posição 30 - dia 31
]

let data_atual = new Date();
let dia_hoje = data_atual.getDate();
dia_hoje--;

let frase_escolhida = frases[dia_hoje];

console.log(frase_escolhida);