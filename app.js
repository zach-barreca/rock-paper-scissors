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

function decideWinner(computerSelection, playerSelection){
    // decide winner of round 
    if (computerSelection === "rock" && (playerSelection === "paper")){
        return "You win! Paper beats rock."
    } else if (computerSelection === "paper" && (playerSelection === "scissors")){
        return "You win! Scissors beats paper."
    } else if (computerSelection === "scissors" && (playerSelection === "rock")){
        return "You win! Rock beats scissors."
    } else if (computerSelection === "paper" && (playerSelection === "rock")){
        return "You lose! Paper beats rock."
    } else if (computerSelection === "scissors" && (playerSelection === "paper")){
        return "You lose! Scissors beats paper."
    } else if (computerSelection === "rock" && (playerSelection === "scissors")){
        return "You lose! Rock beats scissors."
    } else {
        return "It was a draw!"
    }

}

function game(){
    // keep score
    let playerScore = 0;
    let computerScore = 0;
    
    // best of five
    while (playerScore < 3 && computerScore < 3) {
        let playerSelection = prompt("Rock, paper, scissors...").toLowerCase();
        let computerSelection = getComputerChoice();

    // declare winner of each round
        console.log(decideWinner(computerSelection, playerSelection));

    // tally score
        if ((decideWinner(computerSelection, playerSelection)).slice(4,5) === "w"){
            playerScore ++
        } else if ((decideWinner(computerSelection, playerSelection)).slice(4,5) === "l"){
            computerScore ++
        }
    }

    if (playerScore > computerScore) {
        console.log("You won the best of five! Congratulations.")
    } else {
        console.log("You lost the best of five. Better luck next time.")
    }
}

game();