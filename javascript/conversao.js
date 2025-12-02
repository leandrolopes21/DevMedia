const celsius_fahrenheit = () => {

    let temperatura_fahrenheit = temperatura_celsius * 1.8 + 32;
    return temperatura_fahrenheit;
}

let temperatura_celsius = 12;
let temperatura_fahrenheit = celsius_fahrenheit(temperatura_celsius);

console.log(temperatura_celsius + "C equivale a " + temperatura_fahrenheit + "F");