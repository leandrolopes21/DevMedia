// Função tradicional
/*
function converteFahrenheitParaCelsius(fahrenheit) {

    let celsius = (fahrenheit - 32) / 1.8;

    return celsius;
}

let fahrenheit = 90;

console.log(`Neste momento temos ${fahrenheit}°F e ${converteFahrenheitParaCelsius(fahrenheit).toFixed(1)}°C!`);
*/

// Arrow Function
/*
const converteFahrenheitParaCelsius = (fahrenheit) => {

    let celsius = (fahrenheit - 32) / 1.8;

    return celsius;
};

let fahrenheit = 90;

console.log(`Neste momento temos ${fahrenheit}°F e ${converteFahrenheitParaCelsius(fahrenheit).toFixed(1)}°C!`);
*/

// Arrow Function de apenas uma linha

const converteFahrenheitParaCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;

let fahrenheit = 100;

console.log(`Neste momento temos ${fahrenheit}°F e ${converteFahrenheitParaCelsius(fahrenheit).toFixed(1)}°C!`);