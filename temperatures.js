//set Kelvin temperature
const kelvin = 0;

//set Celcius temperature
const celcius = kelvin - 273;

//set Fahrenheit temperature
let fahrenheit = celcius * (9 / 5) + 32;
//round fahrenheit
fahrenheit = Math.floor(fahrenheit);

//print Kelvin, Celcius and Fahrenheit Temperatures
console.log(`The temperature is ${kelvin} degrees Kelvin`);
console.log(`The temperature is ${celcius} degrees Celcius`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

//set Newton temperature
let newton = celcius * (33 / 100);
newton = Math.floor(newton);

//print Newton temperature
console.log(`The temperature is ${newton} degrees Newton`);
