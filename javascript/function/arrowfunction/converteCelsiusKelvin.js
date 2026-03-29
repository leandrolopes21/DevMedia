// Função tradicional
/*
function converteCelsiusParaKelvin(celsius) {

    let kelvin = celsius + 273.15;

    return kelvin;
}

let celsius = 29;

console.log(`Neste momento temos ${celsius}°C e ${converteCelsiusParaKelvin(celsius)}°K!`);
*/

// Arrow Function
/*
const converteCelsiusParaKelvin = (celsius => {

    let kelvin = celsius + 273.15;

    return kelvin;
});

let celsius = 29;

console.log(`Neste momento temos ${celsius}°C e ${converteCelsiusParaKelvin(celsius)}°K!`);
*/

// Arrow Function de apenas uma linha

const converteCelsiusParaKelvin = (celsius) => celsius +273.15;

let celsius = 29;

console.log(`Neste momento temos ${celsius}°C e ${converteCelsiusParaKelvin(celsius)}°K!`);