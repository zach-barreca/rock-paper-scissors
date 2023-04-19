function getComputerChoice(){
    // get a random int between 1-3
    let randomInt = Math.floor(Math.random() * 3 + 1);
    // if 1 rock, else if 2 paper, else scissors
    if (randomInt = 1) {
        computerChoice = "rock";
    } else if (randomInt = 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

console.log(getComputerChoice())