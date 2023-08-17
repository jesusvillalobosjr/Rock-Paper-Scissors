const gameChoices = ["Rock","Paper","Scissors"];

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * gameChoices.length);
    let choice = gameChoices[randomIndex];
    return choice;
}

function playRound(playerSelection,computerSelection){
    playerSelection = formatWord(playerSelection);

    if(!gameChoices.includes(playerSelection))
        console.log("Invalid choice please try again.")

    let playerIndex = gameChoices.indexOf(playerSelection);
    let computerIndex = gameChoices.indexOf(computerSelection);

    let result = (computerIndex === indexOfLoss(playerIndex)) ? -1 : (playerIndex === indexOfLoss(computerIndex)) ? 1 : 0;
    return result;
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let message;

    while(playerScore != 5 && computerScore != 5){
        console.log(`Player:${playerScore}`);
        console.log(`Computer:${computerScore}`);
        let playerChoice;
        do{
            playerChoice = prompt("Rock, Paper, or Scissors?");
            if(playerChoice == null)
                return;
            playerChoice = formatWord(playerChoice);
        }while(!gameChoices.includes(playerChoice));

        let computerChoice = getComputerChoice();

        let result = playRound(playerChoice,computerChoice);
        if(result === 1){
            message = `Player Wins! ${playerChoice} beats ${computerChoice}`;
            console.log(message);
            playerScore++;
        }else if(result == -1){
            message = `Computer Wins! ${computerChoice} beats ${playerChoice}`
            console.log(message);
            computerScore++;
        }else{
            message = `It's a Tie!`;
            console.log(message);
        }
    }

    let winner = (playerScore === 5) ? 'Player' : 'Computer';
    console.log(`${winner} is the winner!`);
}

function formatWord(word){
    word = word.toLowerCase();
    word = word.split("");
    word[0] = word[0].toUpperCase();
    word = word.join("");
    return word;
}

function indexOfLoss(index){
    return (index + 1) % gameChoices.length;
}

game();