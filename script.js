let playerScore = 0;
let computerScore = 0;

function getComputerChoice(choice) {
    
    if (choice == 2) {
        return 'Rock'
    } else if (choice == 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return 0 + 'Both players picked ' + playerSelection + '. The round ended in a draw! Score is now ' + playerScore + ' to ' + computerScore;
        } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
            return ++playerScore + 'Opponenent played ' + computerSelection + '. You win! Score is now ' + playerScore + ' to ' + computerScore;
            } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
                return ++playerScore + 'Opponenent played ' + computerSelection + '. You win! Score is now ' + playerScore + ' to ' + computerScore;
                } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
                    return ++playerScore + 'Opponenent played ' + computerSelection + '. You win! Score is now ' + playerScore + ' to ' + computerScore;
                    } else {
                        return ++computerScore + 'Opponenent played ' + computerSelection + '. You lose! Score is now ' + playerScore + ' to ' + computerScore; 
                        }
};

function game() { 
    let playerSelection = prompt("Pick a move.");
    let result = playRound(playerSelection, getComputerChoice(getRandomInt(3)))
    console.log(result.slice(1));
};

for (let i = 0; i <= 5; i++) {
    if (i < 5) {
        game();
    } else if (playerScore < computerScore) {
        console.log('You lose!')
    } else if (playerScore > computerScore) {
        console.log('You win!')
    } else if (playerScore == computerScore) {
        console.log("It's a draw!")
    }
}

// console.log(playRound('Rock', getComputerChoice(getRandomInt(3))));