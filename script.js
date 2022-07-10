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
                    return "Tie! Both players selected rock!";
                case "paper":
                    return "You lose! Paper beats rock!";
                // if computerSelection is scissors
                default:
                    return "You win! Rock beats scissors!";
            }
        case "paper":
            switch(computerPick) {
                case "rock":
                    return "You win! Paper beats rock!";
                case "paper":
                    return "Tie! Both players selected paper!";
                default:
                    return "You lose! Scissors beats paper!";
            }
        // if playerSelection is scissors
        default:
            switch(computerPick) {
                case "rock":
                    return "You lose! Rock beats scissors!";
                case "paper":
                    return "You win! Scissors beats paper!";
                default:
                    return "Tie! Both players selected scissors!";
            }
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    let roundNum = 0;
    const buttonSelections = document.querySelectorAll('button');

    const roundNumDisplay = document.createElement('h2');
    const userPickDisplay = document.createElement('p');
    const computerPickDisplay = document.createElement('p');
    const roundResultDisplay = document.createElement('p'); // for a single round only
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
                roundNumDisplay.textContent = `Round ${++roundNum} of 5:`;
                let userPick = button.id;
                let computerPick = computerPlay();
                userPickDisplay.textContent = `Your Pick: ${userPick.charAt(0).toUpperCase() + userPick.slice(1)}`;
                computerPickDisplay.textContent = `Computer Pick: ${computerPick.charAt(0).toUpperCase() + computerPick.slice(1)}`;
                let result = playRound(userPick, computerPick);
                roundResultDisplay.textContent = result;

                resultsDisplay.appendChild(roundNumDisplay);
                resultsDisplay.appendChild(userPickDisplay);
                resultsDisplay.appendChild(computerPickDisplay);
                resultsDisplay.appendChild(roundResultDisplay);
            }
        });
    });
}

game();