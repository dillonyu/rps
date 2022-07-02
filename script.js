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
    switch(playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    return "Tie! Both players selected rock!";
                case "paper":
                    return "You lose! Paper beats rock!";
                // if computerSelection is scissors
                default:
                    return "You win! Rock beats scissors!";
            }
        case "paper":
            switch(computerSelection) {
                case "rock":
                    return "You win! Paper beats rock!";
                case "paper":
                    return "Tie! Both players selected paper!";
                default:
                    return "You lose! Scissors beats paper!";
            }
        // if playerSelection is scissors
        default:
            switch(computerSelection) {
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
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, or Scissors?');
        let computerSelection = computerPlay();
        if (playerSelection === null) {
            return;
        }
        playerSelection = playerSelection.toLowerCase();
        // For bad inputs that aren't R, P, or S
        while (!(playerSelection === 'rock' || playerSelection === 'scissors' || playerSelection === 'paper')) {
            playerSelection = prompt('Bad input! Rock, Paper, or Scissors?');
        }
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes('win')) {
            userScore++;
        }
        else if (result.includes('lose')) {
            computerScore++;
        }
     }
     alert(userScore > computerScore ? "You win!" : "You lose!");
}

game();