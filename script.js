/* Function that generates the random computer choice */
function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "rock"
    } else if (num === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

/* Score keeping variables */
let playerWins = 0;
let computerWins =0;

const results = document.querySelector('.results');
const playerScore = document.querySelector('.playerScore');
const cpuScore = document.querySelector('.cpuScore');

/* Function that executes the round */
function playRound(player, computer) {
    
    player = player.toLowerCase();
    if (player === computer) {
        results.textContent = `You chose ${player}\nThe computer chose ${computer}\nIt's a Tie!`;
    } 
    else if (player === "rock") {
        if (computer === "paper") {
            results.textContent = `You chose ${player}\nThe computer chose ${computer}\nYou Lose! Paper beats Rock!`;
            computerWins++
            cpuScore.textContent = `Computer: ${computerWins}`
        }
        else {
            results.textContent = `You chose ${player}\nThe computer chose ${computer}\nYou Win! Rock beats Scissors!`;
            playerWins++
            playerScore.textContent = `You: ${playerWins}`
        }
    }
    else if (player === "paper") {
        if (computer === "rock") {
            results.textContent = `You chose ${player}\nThe computer chose ${computer}\nYou win! Paper beats Rock!`;
            playerWins++
            playerScore.textContent = `You: ${playerWins}`
        }
        else {
            results.textContent = `You chose ${player}\nThe computer chose ${computer}\nYou Lose! Scissors beat Paper!`;
            computerWins++
            cpuScore.textContent = `Computer: ${computerWins}`
        }
    }
    else {
        if (computer === "rock") {
            results.textContent = `You chose ${player}\nThe computer chose ${computer}\nYou Lose! Rock beat Scissors`;
            computerWins++
            cpuScore.textContent = `Computer: ${computerWins}`
        }
        else {
            results.textContent = `You chose ${player}\nThe computer chose ${computer}\nYou Win! Scissors beat Paper!`;
            playerWins++
            playerScore.textContent = `You: ${playerWins}`
        }
    }
    checkResults(playerWins, computerWins);
}

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');

/* Adding button click functionality */
button1.addEventListener('click', function () {
    playRound('rock', computerPlay())
})
button2.addEventListener('click', function () {
    playRound('paper', computerPlay())
})
button3.addEventListener('click', function () {
    playRound('scissors', computerPlay())
})

const final = document.querySelector('#buttonContainer');

/* Function checking overall game results */
function checkResults(playerW, cpuW) {
    if (playerW < 5 && cpuW < 5) {
        return
    } else if (playerW === 5) {
        final.textContent = 'You Win';
    } else if (cpuW === 5) {
        final.textContent = 'The Computer Wins';
    }
}
