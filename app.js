function getComputerChoice(){
    // get random int from 1 - 3
    let randomInt = Math.floor(Math.random() * 3 + 1);
    // assign a choice based on random int
    if (randomInt === 1) {
        computerChoice = "rock";
    } else if (randomInt === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

function playRound(computerSelection, playerSelection){
    // decide winner of round 
    if (computerSelection === "rock" && (playerSelection === "paper")){
        return "You win!"
    } else if (computerSelection === "paper" && (playerSelection === "scissors")){
        return "You win!"
    } else if (computerSelection === "scissors" && (playerSelection === "rock")){
        return "You win!"
    } else if (computerSelection === "paper" && (playerSelection === "rock")){
        return "You lose!"
    } else if (computerSelection === "scissors" && (playerSelection === "paper")){
        return "You lose!"
    } else if (computerSelection === "rock" && (playerSelection === "scissors")){
        return "You lose!"
    } else {
        return "It was a draw!"
    }

}