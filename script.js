function computerPlay () {
    let draws=["rock", "paper", "scissors"];
    return draws[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let winner = "";
    if (playerSelection === computerSelection){
        console.log("It's a tie!");
        return "tie";
    } 

    if (playerSelection !== "rock" && playerSelection !== "scissors" 
        && playerSelection !== "paper") {
        console.log("Invalid input");
        return "invalid";
    }

    if((playerSelection === "rock" && computerSelection === "scissors") 
        || (playerSelection === "paper" && computerSelection === "rock") 
        || (playerSelection === "scissors" && computerSelection === "paper")){
        return "player";
    } else { 
        return "computer";
    }
 
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        console.log(i);
        const playerSelection = prompt("Let's Play! Choose Rock, Paper, or Scissors!");
        const computerSelection = computerPlay();
        let winner = playRound(playerSelection, computerSelection);
        if(winner === "player"){
            playerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}! Score: ${playerScore}:${computerScore}`);
        }else if(winner === "computer"){
            computerScore++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}! Score: ${playerScore}:${computerScore}`);
        }
    }
    if(playerScore === computerScore){
        return `It's a tie! Score: ${playerScore}:${computerScore}`;
    }else if(Math.max(playerScore, computerScore) === playerScore){
        return `You Win! Score: ${playerScore}:${computerScore}`;
    }else{
        return `You Lose! Score: ${playerScore}:${computerScore}`;
    }
}

console.log(game());