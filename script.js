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

function playRound(userPick, computerPick) {
    const result = document.querySelector('.result');
    switch(userPick) {
        case "rock":
            switch(computerPick) {
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
            switch(computerPick) {
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
            switch(computerPick) {
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
    const userPickDisplay = document.createElement('p');
    const computerPickDisplay = document.createElement('p');
    const resultsDisplay = document.querySelector('.results');

    buttonSelections.forEach((button) => {
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
                let userPick = button.id;
                let computerPick = computerPlay();
                userPickDisplay.textContent = `Your Pick: ${userPick.charAt(0).toUpperCase() + userPick.slice(1)}`;
                computerPickDisplay.textContent = `Computer Pick: ${computerPick.charAt(0).toUpperCase() + computerPick.slice(1)}`;
                resultsDisplay.appendChild(userPickDisplay);
                resultsDisplay.appendChild(computerPickDisplay);
                let result = playRound(userPick, computerPick);
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

game();