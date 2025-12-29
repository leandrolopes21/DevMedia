// Função tradicional
/*
function converteCelsiusParaFahrenheit(celsius) {

    let fahrenheit = (celsius * 1.8) + 32;

    return fahrenheit;
}

let celsius = 29;

console.log(`Neste momento temos ${celsius}°C e ${converteCelsiusParaFahrenheit(celsius)}°F!`);
*/

// Arrow Function

/*
const converteCelsiusParaFahrenheit = (celsius => {

    let fahrenheit = (celsius * 1.8) + 32;

    return fahrenheit;
});

let celsius = 29;

console.log(`Neste momento temos ${celsius}°C e ${converteCelsiusParaFahrenheit(celsius)}°F!`);
*/

// Arrow Function de apenas uma linha

const converteCelsiusParaFahrenheit = (celsius) => (celsius * 1.8) + 32;

let celsius = 33;

console.log(`Neste momento temos ${celsius}°C e ${converteCelsiusParaFahrenheit(celsius)}°F!`);