//set kelvin temperature
const kelvin = 0;

//set celcius temperature
const celcius = kelvin - 273;

//set fahrenheit temperature
let fahrenheit = celcius * (9 / 5) + 32;
//round fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${kelvin} degrees Kelvin`);
console.log(`The temperature is ${celcius} degrees Celcius`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = celcius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);
