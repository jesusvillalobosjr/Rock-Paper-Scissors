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

    let result = (computerIndex === indexOfLoss(playerIndex)) ? `Computer Wins! ${gameChoices[computerIndex]} beats ${gameChoices[playerIndex]}` : (playerIndex === indexOfLoss(computerIndex)) ? `Player Wins! ${gameChoices[playerIndex]} beats ${gameChoices[computerIndex]}` : `It's a Tie!`;
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