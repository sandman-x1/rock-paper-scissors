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
    playerWins = 0;
    computerWins = 0;
    player = player.toLowerCase();
    if (player === computer) {
        return "It's a Tie!"
    } 
    else if (player === "rock") {
        if (computer === "paper") {
            computerWins++
            return "You Lose! Paper beats Rock!"
        }
        else {
            playerWins++
            return "You Win! Rock beats Scissors!"
        }
    }
    else if (player === "paper") {
        if (computer === "rock") {
            playerWins++
            return "You win! Paper beats Rock!"
        }
        else {
            computerWins++
            return "You Lose! Scissors beat Paper!"
        }
    }
    else {
        if (computer === "rock") {
            computerWins++
            return "You Lose! Rock beat Scissors"
        }
        else {
            playerWins++
            return "You Win! Scissors beat Paper!"
        }
    }
}

