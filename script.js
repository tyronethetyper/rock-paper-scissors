console.log("Hello, world!");

function getComputerChoice() {
    let choice = Math.round(Math.random() * 3);
    let comp_choice = 0;

    if (choice === 3) {
        comp_choice = "scissors";
    }
    else if (choice === 2) {
        comp_choice = "paper";
    }
    else {
        comp_choice = "rock";
    }

    return comp_choice;
}

computer = getComputerChoice();


function getHumanChoice() {
    let prompt_choice = prompt("Rock, Paper or Scissors? Type your choice and cross your fingers.");
    player_choice = prompt_choice.toLowerCase();

    if (player_choice != "rock" && player_choice != "scissors" && player_choice != "paper") {
        alert("Please enter a valid choice - Rock, Paper or Scissors.");
        return getHumanChoice();
    }
    
    return player_choice;
}

player = getHumanChoice();
console.log(player);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let player_win;
    if (humanChoice === computerChoice) {
        return console.log(`It's a tie! You both chose ${humanChoice}.`);
    }
    
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'paper' && computerChoice === 'rock') || 
        (humanChoice === 'scissors' && computerChoice === 'paper') 
    ) {
        humanScore++;
        console.log(`You Win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`);
        return;
    } else {
        computerScore++;
        console.log(`You Lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}`);
        return;
    }
}

playRound(player, computer);


