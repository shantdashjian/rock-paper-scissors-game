var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock"){
        if (choice2 === "scissors") {
        	return "rock wins";
        } else if (choice2 === "rope") {
        	return "rope wins";	
        } else {
          return "paper wins";
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else if (choice2 === "rope"){
        	return "paper wins";
        } else {
            return "scissors wins";
        }
    } else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return "scissors wins";
        } else if (choice2 === "rope"){
        	return "scissors wins";
        } else {
            return "rock wins";
        }
    } else if (choice1 === "rope") {
    	if (choice2 === "rock") {
    		return "rope wins";
    	} else if (choice2 ==="paper") {
    		return "paper wins";
    	} else {
    		return "scissors wins";
    	}
    }
};

var playGame = function() {
	userChoice = prompt("Do you choose rock, paper, scissors, or rope?");
	while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors"
		&& userChoice !== "rope") {
		userChoice = prompt("Incorrect choice. Please choose rock, paper, scissors, or rope.");	
	}
	computerChoice = Math.random();
	if (computerChoice < 0.26) {
		computerChoice = "rock";
	} else if(computerChoice <= 0.50) {
		computerChoice = "paper";
	} else if (computerChoice <= 0.75) {
		computerChoice = "scissors";
	} else {
		computerChoice = "rope";
	} console.log("Computer: " + computerChoice);
};

var userChoice;
var computerChoice;
var result;
playGame();
result = compare(userChoice, computerChoice);
console.log(result);
while (result === "The result is a tie!") {
	console.log("Let's play again!");
	playGame();
	result = compare(userChoice, computerChoice);
	console.log(result);
} 
console.log("That was fun! Till next time!");


