//get user input
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  
  if (userInput === 'rock' || userInput === 'paper' || userInput ==='scissors'){
    return userInput;
  } else {
    console.log('Wrong Input!');
  }
};

//print user input
console.log(getUserChoice('paper'));
console.log(getUserChoice('rock'));
console.log(getUserChoice('scissors'));

//get computer choice
function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

//print computer choice
console.log(getComputerChoice());

//determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return 'Player1 won';
  }
  if (userChoice === computerChoice) {
    return 'Tie';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!';
    } else {
      return 'Player1 won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won!';
    } else {
      return 'Player1 won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'Player1 won!';
    }
  }
}

//print winner
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('paper', 'paper'));
console.log(determineWinner('paper', 'rock'));

//function game rock paper scissors
function playGame() {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();

  console.log('Your choice : ' + userChoice);
  console.log('Computer choice : ' +computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
};

playGame();
