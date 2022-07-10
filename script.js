function computerPlay() {
    const randNum = Math.random();
    if (randNum >= 2/3) {
        return "rock";
    }
    else if (randNum >= 1/3) {
        return "paper";
    }
    return "scissors";
}

function playRound(playerSelection, computerSelection) {
    const result = document.querySelector('.result');
    switch(playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    result.textContent = "Tie! Both players selected rock!";
                    return 0;
                case "paper":
                    result.textContent = "You lose! Paper beats rock!";
                    return -1;
                // if computerSelection is scissors
                default:
                    roundResult.textContent = "You win! Rock beats scissors!";
                    return 1;
            }
        case "paper":
            switch(computerSelection) {
                case "rock":
                    result.textContent = "You win! Paper beats rock!";
                    return 1;
                case "paper":
                    result.textContent = "Tie! Both players selected paper!";
                    return 0;
                default:
                    result.textContent = "You lose! Scissors beats paper!";
                    return -1;
            }
        // if playerSelection is scissors
        default:
            switch(computerSelection) {
                case "rock":
                    result.textContent = "You lose! Rock beats scissors!";
                    return -1;
                case "paper":
                    result.textContent = "You win! Scissors beats paper!";
                    return 1;
                default:
                    result.textContent = "Tie! Both players selected scissors!";
                    return 0;
            }
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    const buttonSelections = document.querySelectorAll('button');
    buttonSelections.forEach((button) => {
        let playerSelection = button.id;
        button.addEventListener('click', function onClick() {
            let total = userScore + computerScore;
            if (total === 5) {
                if (userScore > computerScore) {
                    console.log("You win!");
                } 
                else {
                    console.log("You lose!");
                }
            }
            else {
                let computerSelection = computerPlay();
                let result = playRound(playerSelection, computerSelection);
                switch(result) {
                    case 1: 
                        userScore++;
                        break;
                    case -1: 
                        computerScore++;
                        break;
                    default:
                        break;
                }
            }
        });
    });
}

function onClick() {
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    switch(result) {
        case 1: 
            userScore++;
            break;
        case -1: 
            computerScore++;
            break;
        default:
            break;
    }
    let total = userScore + computerScore;
    if (total === 5) {
        if (userScore > computerScore) {
            console.log("You win!");
        } 
        else {
            console.log("You lose!");
        }
    }
}

game();