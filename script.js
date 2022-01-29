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

let playerWins = 0;
let computerWins =0;

const results = document.querySelector('.results');

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

/* function game() {
    tieCounter = 0;
    playerWins = 0;
    computerWins = 0;
    for (i = 0; i < 5; i++) {
        let choice = prompt("Please choose between Rock, Paper or Scissors");
        playRound(choice, computerPlay());
    }
    if (playerWins === computerWins) {
        console.log(`You Tied the Match on ${playerWins} wins each!`);
    } else if (playerWins > computerWins) {
        console.log(`You Won the Match ${playerWins} wins to ${computerWins} !`)
    } else {
        console.log(`You Lost the Match ${computerWins} to ${playerWins} !`)
    }
} */

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');

button1.addEventListener('click', function () {
    playRound('rock', computerPlay())
})
button2.addEventListener('click', function () {
    playRound('paper', computerPlay())
})
button3.addEventListener('click', function () {
    playRound('scissors', computerPlay())
})

const playerScore = document.querySelector('.playerScore');
const cpuScore = document.querySelector('.cpuScore');
const score = document.querySelector('.score');

function checkResults(playerW, cpuW) {
    if (playerW < 5 && cpuW < 5) {
        return
    } else if (playerW === 5) {
        score.textContent = 'You Win'
    } else if (cpuW === 5) {
        score.textContent = 'The Computer Wins'
    }
}
