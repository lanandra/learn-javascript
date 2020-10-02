//greet user
let userName = 'user1';

/*
check if username empty or not
if empty greet user as guest
*/
if (userName) {
 console.log(`Hello ${userName} !`);
 console.log(`How are you ${userName} ?`);
} 
else {
 console.log(`Hello guest !`);
 console.log(`How are you guest ?`);
}

//set random number
let randomNumber = Math.floor(Math.random() * 10);
let outputNumber = '';

//print random output number
switch (randomNumber) {
  case 0:
   outputNumber = '0';
   console.log(`Your random number is ${outputNumber}`);
   break;
  case 1:
   outputNumber = '1';
   console.log(`Your random number is ${outputNumber}`);
   break;
  case 2:
   outputNumber = '2';
   console.log(`Your random number is ${outputNumber}`);
   break;
  case 3:
   outputNumber = '3';
   console.log(`Your random number is ${outputNumber}`);
   break;
  case 4:
   outputNumber = '4';
   console.log(`Your random number is ${outputNumber}`);
   break;
  case 5:
   outputNumber = '5';
   console.log(`Your random number is ${outputNumber}`);
   break;
  case 6:
   outputNumber = '6';
   console.log(`Your random number is ${outputNumber}`);
   break;
  case 7:
   outputNumber = '7';
   console.log(`Your random number is ${outputNumber}`);
   break;
  case 8:
   outputNumber = '8';
   console.log(`Your random number is ${outputNumber}`);
   break;
  case 9:
   outputNumber = '9';
   console.log(`Your random number is ${outputNumber}`);
   break;
}
