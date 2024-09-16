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



function getHumanChoice() {
    let player_choice = prompt("Type 1 for Rock, 2 for Paper or 3 for Scissors");
    let choice_num = Number(player_choice);
    let choice_string = "";

    if (!(Number.isInteger(choice_num)) || choice_num < 1 || choice_num > 3) {
        alert("Please enter a valid number between 1 and 3.");
        return getHumanChoice();
    }
    if (choice_num === 3) {
        choice_string = "scissors";
    }
    else if (choice_num === 2) {
        choice_string = "paper";
    }
    else {
        choice_string = "rock";
    }
    
    return choice_string;
}

p_choice = getHumanChoice();
console.log(p_choice);



