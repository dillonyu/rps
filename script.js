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
    // const result = document.querySelector('.result');
    switch(playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    // result.textContent = "Tie! Both players selected rock!";
                    console.log("Tie! Both players selected rock!");
                    return 0;
                case "paper":
                    // result.textContent = "You lose! Paper beats rock!";
                    console.log("You lose! Paper beats rock!");
                    return -1;
                // if computerSelection is scissors
                default:
                    // result.textContent = "You win! Rock beats scissors!";
                    console.log("You win! Rock beats scissors!");
                    return 1;
            }
        case "paper":
            switch(computerSelection) {
                case "rock":
                    console.log("You win! Paper beats rock!");
                    return 1;
                case "paper":
                    console.log("Tie! Both players selected paper!");
                    return 0;
                default:
                    console.log("You lose! Scissors beats paper!");
                    return -1;
            }
        // if playerSelection is scissors
        default:
            switch(computerSelection) {
                case "rock":
                    console.log("You lose! Rock beats scissors!");
                    return -1;
                case "paper":
                    console.log("You win! Scissors beats paper!");
                    return 1;
                default:
                    console.log("Tie! Both players selected scissors!");
                    return 0;
            }
    }
}

function game() {
    let userScore = 0;
    // for (let i = 0; i < 5; i++) {
        const buttonSelections = document.querySelectorAll('button');
        buttonSelections.forEach((button) => {
            let playerSelection = button.id;
            button.addEventListener('click', () => {
                let computerSelection = computerPlay();
                playRound(playerSelection, computerSelection);
            });
        });
    //     if (playerSelection === null) {
    //         return;
    //     }
    //     playerSelection = playerSelection.toLowerCase();
    //     // For bad inputs that aren't R, P, or S
    //     while (!(playerSelection === 'rock' || playerSelection === 'scissors' || playerSelection === 'paper')) {
    //         playerSelection = prompt('Bad input! Rock, Paper, or Scissors?');
    //     }
    //     userScore += playRound(playerSelection, computerSelection);
    // //  }
    //  if (userScore > 0) {
    //     alert("You win!");
    //  }
    //  else if (userScore < 0) {
    //     alert("You lose!");
    //  }
    //  else {
    //     alert("Tie!");
    //  }
}

game();