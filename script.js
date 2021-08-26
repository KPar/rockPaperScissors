function computerPlay () {
    let draws=["rock", "paper", "scissors"];
    return draws[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return "tie";
    } 

    if((playerSelection === "rock" && computerSelection === "scissors") 
        || (playerSelection === "paper" && computerSelection === "rock") 
        || (playerSelection === "scissors" && computerSelection === "paper")){
        return "player";
    } else { 
        return "computer";
    }
 
}
const button = document.querySelectorAll("button");
const results = document.querySelector("div");

function game(){
    let playerScore = 0;
    let computerScore = 0;

    button.forEach(button => button.addEventListener("click", (e) => 
    {
        let playerSelection = "";

        switch(e.target.getAttribute("data-button")){
            case "rock":
                playerSelection = "rock"
                break;
            case "paper":
                playerSelection = "paper"
                break;
            case "scissors":
                playerSelection = "scissors"
                break;
            default:
                console.log("cool");
        }
        const computerSelection = computerPlay();
        let winner = playRound(playerSelection, computerSelection);
        if(winner === "player"){
            playerScore++;
            results.textContent = `You win! ${playerSelection} beats ${computerSelection}! Score: ${playerScore}:${computerScore}`;
        }else if(winner === "computer"){
            computerScore++;
            results.textContent = `You lose! ${computerSelection} beats ${playerSelection}! Score: ${playerScore}:${computerScore}`;
        } else {
            results.textContent = "It's a tie!";
        }
        if(playerScore === 2){
            results.textContent = `You Win the Game! Score: ${playerScore}:${computerScore}`;
            playerScore = 0;
            computerScore = 0;
        }else if (computerScore === 2){
            results.textContent = `You Lose the Game! Score: ${playerScore}:${computerScore}`;
            playerScore = 0;
            computerScore = 0;
        }
        /*
        if(playerScore === computerScore){
            return `It's a tie! Score: ${playerScore}:${computerScore}`;
        }else if(Math.max(playerScore, computerScore) === playerScore){
            return `You Win! Score: ${playerScore}:${computerScore}`;
        }else{
            return `You Lose! Score: ${playerScore}:${computerScore}`;
        }*/
        //write the game code here to start 
        //each time user presses a button, we have computerplay then playRound then add the appropriate score,
        //first player to 5 for any , we end game nd annoucne winner

    }))
/*
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
    }*/
} 

console.log(game());