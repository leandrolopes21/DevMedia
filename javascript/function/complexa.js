/*
function getEvenNumbers(...numbers) {
    const result = [];
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        }
    }

    return result;
}

console.log(getEvenNumbers(2, 3, 4, 7, 11, 12, 15, 17));
*/

// Condição válida e menos complexa
function getEvenNumbers(...numbers) {
    return numbers.filter(num => num % 2 === 0);
}

console.log(getEvenNumbers(2, 3, 4, 7, 11, 12, 15, 17));

/*
function getEvenNumbers(...numbers) {
    const result = numbers.map(num => num % 2 === 0);
    return result;
}

console.log(getEvenNumbers(2, 3, 4, 7, 11, 12, 15, 17));
*/

