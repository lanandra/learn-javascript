/*
This temperature converter is use celcius as base temperature.
Changing the value on celcius temperature, then it will convert the value of other temperatures
*/

//set Celcius temperature
const celcius = 0;

//set Kelvin temperature
const kelvin = celcius + 273;

//set Fahrenheit temperature
let fahrenheit = celcius * (9 / 5) + 32;
//round fahrenheit
fahrenheit = Math.floor(fahrenheit);

//print Kelvin, Celcius and Fahrenheit Temperatures
console.log(`The temperature is ${celcius} degrees Celcius`);
console.log(`The temperature is ${kelvin} degrees Kelvin`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

//set Newton temperature
let newton = celcius * (33 / 100);
//round Newton
newton = Math.floor(newton);

//print Newton temperature
console.log(`The temperature is ${newton} degrees Newton`);
