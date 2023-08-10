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

        return ["It's a draw!", computerSelection, computerScore, playerScore];
        
        } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {

            return ["You win!", computerSelection, computerScore, ++playerScore];

            } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {

                return ["You win!", computerSelection, computerScore, ++playerScore];

                } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {

                    return ["You win!", computerSelection, computerScore, ++playerScore];

                    } else {

                        return ["You lose!", computerSelection, ++computerScore, playerScore];

                        }
};

function game() { 
    let playerSelection = prompt("Pick a move.");
    let result = playRound(playerSelection, getComputerChoice(getRandomInt(3)))
    console.log(result.slice(1));
};

const button = document.querySelectorAll('.gameButton');

const results = document.querySelector('#results');
const status = document.querySelector('#status')

let gameState = 'running'

button.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.id == "rock" && gameState == 'running') {
            let result = playRound('Rock', getComputerChoice(getRandomInt(3)))
            results.textContent = 'Score is ' + playerScore + ' to ' + computerScore;
            status.textContent = 'Opponent played ' + result.slice(1, 2) + '. ' + result.slice(0, 1);
        } else if (e.target.id == "paper" && gameState == 'running') {
            let result = playRound('Paper', getComputerChoice(getRandomInt(3)))
            results.textContent = 'Score is ' + playerScore + ' to ' + computerScore;
            status.textContent = 'Opponent played ' + result.slice(1, 2) + '. ' + result.slice(0, 1);
        } else if (gameState == 'running') {
            let result = playRound('Scissors', getComputerChoice(getRandomInt(3)))
            results.textContent = 'Score is ' + playerScore + ' to ' + computerScore;
            status.textContent = 'Opponent played ' + result.slice(1, 2) + '. ' + result.slice(0, 1);
        }

        if (computerScore == 5) {
            status.textContent = 'Computer Wins!'
            gameState = 'finished'
        }

        if (playerScore == 5) {
            status.textContent = 'You Win!'
            gameState = 'finished'
        }

    })
})
/*
for (let i = 0; i <= 5; i++) {
    if (i < 5) {

        game();

    } else if (playerScore < computerScore) {

        console.log('You lose!')

    } else if (playerScore > computerScore) {

        console.log('You win!')

    } else {

        console.log("It's a draw!")

    }
}
*/


// console.log(playRound('Rock', getComputerChoice(getRandomInt(3))));