let data = new Date();

let dataOptions = {
    weekday: 'long',
    day: 'numeric',
    month: "numeric",
    year: 'numeric'
};

console.log(data.toLocaleDateString('pt-BR', dataOptions));