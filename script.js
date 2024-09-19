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

let humanScore = 0;
let computerScore = 0;

function playGame(playerSelection) {
    
    if (computerScore > 5 || humanScore > 5) {
        return;
    }
    comp_choice = getComputerChoice();

    function playRound(playerSelection, computerChoice) {
        let result_text = "";
        if (playerSelection === computerChoice) {
            result_text = `It's a tie! You both chose ${playerSelection}.`;
        }
        
        else if (
            (playerSelection === 'rock' && computerChoice === 'scissors') || 
            (playerSelection === 'paper' && computerChoice === 'rock') || 
            (playerSelection === 'scissors' && computerChoice === 'paper') 
        ) {
            humanScore++;
            result_text = `You Win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`;
        } else {
            computerScore++;
            result_text = `You Lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1)}`;
        }

        result_p.textContent = result_text;
        player_p.textContent = `Player Score: ${humanScore}`;
        comp_p.textContent = `Computer Score: ${computerScore}`;

        if (computerScore === 5 || humanScore === 5) {
            
            if (computerScore > humanScore) {
                f_result.textContent = "The Computer is the winner :(";
            }
            else {
                f_result.textContent = "You are the winner! :)";
            }
            
        }

    }

    playRound(playerSelection, comp_choice);
}

let player_score_text = "";
let comp_score_text = "";

const result_p = document.querySelector(".result");
const player_p = document.querySelector(".p-score");
const comp_p = document.querySelector(".c-score");
const f_result = document.querySelector(".final-result");


