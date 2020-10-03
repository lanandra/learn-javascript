//create random number between 0 and 999
let raceNumber = Math.floor(Math.random() * 1000);
//check if user is registered early or not
const registeredEarly = false;
//set user age
const age = 18;

//check if user age is above 18 and registered early or not
if (age > 18 && registeredEarly) {
 raceNumber += 1000;
}

/*
Check if user is above 18, below 18 or exactly 18.
Check if user registered early or not
Tell user about race time and race number
*/
if (age > 18 && registeredEarly) {
 console.log(`Hi, your race will be started at 09:30 AM. Your race number is ${raceNumber}`);
}
else if (age > 18 && !registeredEarly) {
 console.log(`Hi, your race will be started at 11:00 AM. Your race number is ${raceNumber}`);
}
else if (age < 18) {
  console.log(`Hi, your race will be started at 12:30 PM. Your race number is ${raceNumber}`);
}
else {
  console.log('Please see registration desk');
}
