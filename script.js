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

const results = document.querySelector('.results');

function playRound(player, computer) {
    
    player = player.toLowerCase();
    if (player === computer) {
        results.textContent = `You chose ${player}\nThe computer chose ${computer}\nIt's a Tie!`;
    } 
    else if (player === "rock") {
        if (computer === "paper") {
            results.textContent = `You chose ${player}\nThe computer chose ${computer}\nYou Lose! Paper beats Rock!`;
        }
        else {
            results.textContent = `You chose ${player}\nThe computer chose ${computer}\nYou Win! Rock beats Scissors!`;
        }
    }
    else if (player === "paper") {
        if (computer === "rock") {
            results.textContent = `You chose ${player}\nThe computer chose ${computer}\nYou win! Paper beats Rock!`;
        }
        else {
            results.textContent = `You chose ${player}\nThe computer chose ${computer}\nYou Lose! Scissors beat Paper!`;
        }
    }
    else {
        if (computer === "rock") {
            results.textContent = `You chose ${player}\nThe computer chose ${computer}\nYou Lose! Rock beat Scissors`;
        }
        else {
            results.textContent = `You chose ${player}\nThe computer chose ${computer}\nYou Win! Scissors beat Paper!`;
        }
    }
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

