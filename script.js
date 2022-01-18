function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "Rock"
    } else if (num === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(player, computer) {
    player = player.toLowerCase();
    if (player === computer) {
        return "It's a Tie!"
    } 
    else if (player === "rock") {
        if (computer === "paper") {
            return "You Lose! Paper beats Rock!"
        }
        else return "You Win! Rock beats Scissors!"
    }
    else if (player === "paper") {
        if (computer === "rock") {
            return "You win! Paper beats Rock!"
        }
        else return "You Lose! Scissors beat Paper!"
    }
    else {
        if (computer === "rock") {
            return "You Lose! Rock beat Scissors"
        }
        else return "You Win! Scissors beat Paper!"
    }
}

console.log(playRound("scissors" ,"paper"));