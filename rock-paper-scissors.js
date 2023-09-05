const gameChoices = ["Rock","Paper","Scissors"];

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * gameChoices.length);
    let choice = gameChoices[randomIndex];
    return choice;
}

function playRound(playerSelection,computerSelection){
    let playerIndex = gameChoices.indexOf(playerSelection);
    let computerIndex = gameChoices.indexOf(computerSelection);

    let result = (computerIndex === indexOfLoss(playerIndex)) ? -1 : (playerIndex === indexOfLoss(computerIndex)) ? 1 : 0;
    return result;
}

// function game(){
//     let playerScore = 0;
//     let computerScore = 0;
//     let message;

//     while(playerScore != 5 && computerScore != 5){
//         let playerChoice;
//         do{
//             playerChoice = prompt("Rock, Paper, or Scissors?");
//             if(playerChoice == null)
//                 return;
//             playerChoice = formatWord(playerChoice);
//         }while(!gameChoices.includes(playerChoice));

//         let computerChoice = getComputerChoice();

//         let result = playRound(playerChoice,computerChoice);
//         if(result === 1){
//             message = `Player Wins! ${playerChoice} beats ${computerChoice}`;
//             console.log(message);
//             playerScore++;
//         }else if(result == -1){
//             message = `Computer Wins! ${computerChoice} beats ${playerChoice}`
//             console.log(message);
//             computerScore++;
//         }else{
//             message = `It's a Tie!`;
//             console.log(message);
//         }
//     }

//     let winner = (playerScore === 5) ? 'Player' : 'Computer';
//     console.log(`${winner} is the winner!`);
// }

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

// -------------------------------------------------------------------------------

const startButton = document.querySelector("#start");
const startPage = document.querySelector("#start-page");
const gamePage = document.querySelector("#game");

function startGame(){
    startPage.style.cssText = "display : none;";
    gamePage.style.cssText = "display: flex";
}

startButton.addEventListener("click",startGame);

let playerScoreCount = 0;
let computerScoreCount = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

const playerChoiceText = document.querySelector(".player-choice");
const computerChoiceText = document.querySelector(".computer-choice");

const announcement = document.querySelector(".game-result");

rock.addEventListener("click",game);
paper.addEventListener("click",game);
scissors.addEventListener("click",game)

function game(e){
    let playerChoice = e.srcElement.textContent;
    let computerChoice = getComputerChoice();

    let result = playRound(playerChoice,computerChoice);

    if(result === 1){
        announcement.textContent = `Player wins!`;
        playerScore.textContent = `Player Score: ${++playerScoreCount}`;
    }else if(result === -1){
        announcement.textContent = `Computer wins!`;
        computerScore.textContent = `Computer Score: ${++computerScoreCount}`;
    }else{
        announcement.textContent = `Its a tie!`;
    }

    playerChoiceText.textContent = `Player Choice: ${playerChoice}`;
    computerChoiceText.textContent = `Computer Choice: ${computerChoice}`;

    checkForWinner();
}

const resetButton = document.querySelector("#reset");
const announcementText = document.querySelector("#announcement-text");
const popUp = document.querySelector("#announcement");

resetButton.addEventListener('click',reset);

function checkForWinner(){
    if(playerScoreCount >= 5){
        announcementText.textContent = "Player won the game!";
        popUp.style.cssText = "display: flex;";
    }else if(computerScoreCount >= 5){
        announcementText.textContent = "Computer won the game!";
        popUp.style.cssText = "display: flex;";
    }
}

function reset(){
    playerScoreCount = 0;
    computerScoreCount = 0;
    popUp.style.cssText = "display: none";
    playerChoiceText.textContent = `Player Choice:`;
    computerChoiceText.textContent = `Computer Choice:`;
    playerScore.textContent = `Player Score: 0`;
    computerScore.textContent = `Computer Score: 0`;
    announcement.textContent = 'Begin!';
}