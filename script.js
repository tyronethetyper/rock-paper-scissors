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

// const rock_button = document.querySelector('.rock');
// const paper_button = document.querySelector('.paper');
// const scissors_button = document.querySelector('.scissors');

const buttons = document.querySelectorAll('button');

console.log(buttons);

buttons.forEach(button => {
    button.addEventListener('click', getPlayerSelection);
});

function getPlayerSelection(e) {
    player_choice = e.target.textContent.toLowerCase();

    if (player_choice != "rock" && player_choice != "scissors" && player_choice != "paper") {
        alert("Please enter a valid choice - Rock, Paper or Scissors.");
        return getPlayerSelection();
    }
    
    playGame(player_choice);
} 

function playGame(playerSelection) {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(playerSelection, computerChoice) {
        if (playerSelection === computerChoice) {
            console.log(`It's a tie! You both chose ${playerSelection}.`);
        }
        
        else if (
            (playerSelection === 'rock' && computerChoice === 'scissors') || 
            (playerSelection === 'paper' && computerChoice === 'rock') || 
            (playerSelection === 'scissors' && computerChoice === 'paper') 
        ) {
            humanScore++;
            console.log(`You Win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`);
        } else {
            computerScore++;
            console.log(`You Lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`);
        }
    }
}



