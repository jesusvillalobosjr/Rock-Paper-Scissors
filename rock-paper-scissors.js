const gameChoices = ["Rock","Paper","Scissors"];

function getComputerChoice(){
    let randomIndex = Math.floor(Math.random() * gameChoices.length);
    let choice = gameChoices[randomIndex];
    return choice;
}