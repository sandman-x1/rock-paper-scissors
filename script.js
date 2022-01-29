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

function playRound(player, computer) {
    
    player = player.toLowerCase();
    if (player === computer) {
        tieCounter++
        console.log(`You chose ${player}\nThe computer chose ${computer}\nIt's a Tie!`);
    } 
    else if (player === "rock") {
        if (computer === "paper") {
            computerWins++
            console.log(`You chose ${player}\nThe computer chose ${computer}\nYou Lose! Paper beats Rock!`);
        }
        else {
            playerWins++
            console.log(`You chose ${player}\nThe computer chose ${computer}\nYou Win! Rock beats Scissors!`);
        }
    }
    else if (player === "paper") {
        if (computer === "rock") {
            playerWins++
            console.log(`You chose ${player}\nThe computer chose ${computer}\nYou win! Paper beats Rock!`);
        }
        else {
            computerWins++
            console.log(`You chose ${player}\nThe computer chose ${computer}\nYou Lose! Scissors beat Paper!`);
        }
    }
    else {
        if (computer === "rock") {
            computerWins++
            console.log(`You chose ${player}\nThe computer chose ${computer}\nYou Lose! Rock beat Scissors`);
        }
        else {
            playerWins++
            console.log(`You chose ${player}\nThe computer chose ${computer}\nYou Win! Scissors beat Paper!`);
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

