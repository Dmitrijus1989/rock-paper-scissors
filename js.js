const getUserChoice = function(userInput) {
  userInput = userInput.toLowerCase();
  if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') {
    return userInput
  } else {
    alert("wrong input!")
  }
}
const getComputerChoice = function() {
  let randomNumber = Math.floor(Math.random()*3)
  if (randomNumber === 0) {
    return "rock"
  } else if (randomNumber === 1) {
    return "paper"
  } else if (randomNumber === 2) {
    return "scissors"
  } else {
    return "wrong input"
  }
}
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
      return document.getElementById('result').innerHTML = "The game was a tie"
    } else if (userChoice === "rock") {
          if (computerChoice === "paper") {
          return document.getElementById('result').innerHTML = "computer won!";
        } else if (computerChoice !== "paper") {
    	  return document.getElementById('result').innerHTML = "You won!";
   		 }
  	}else if (userChoice === "paper") {
          if (computerChoice === "scissors") {
          return document.getElementById('result').innerHTML = "computer won!";
        } else if (computerChoice !== "scissors") {
    	  return document.getElementById('result').innerHTML = "You won!";
   		 }
    }else if (userChoice === "scissors") {
          if (computerChoice === "rock") {
          return document.getElementById('result').innerHTML = "computer won!";
        } else if (computerChoice !== "rock") {
    	  return document.getElementById('result').innerHTML = "You won!";
   		 }
    }
}
const playTheGame = () => {
  let player1 = getUserChoice(document.getElementById('getUserChoiceHtml').value);
  let player2 = getComputerChoice();
  document.getElementById('userChoiseHTML').innerHTML = player1;
  document.getElementById('computerChoiceHTML').innerHTML = player2;
  determineWinner(player1, player2)
}
