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
        console.log("You chose " + player + "\n" +
                    "The computer chose " + computer + "\n" +
                    "It's a Tie!");
    } 
    else if (player === "rock") {
        if (computer === "paper") {
            computerWins++
            console.log("You chose " + player + "\n" +
                        "The computer chose " + computer + "\n" +
                        "You Lose! Paper beats Rock!");
        }
        else {
            playerWins++
            console.log("You chose " + player + "\n" +
                        "The computer chose " + computer + "\n" +
                        "You Win! Rock beats Scissors!");
        }
    }
    else if (player === "paper") {
        if (computer === "rock") {
            playerWins++
            console.log("You chose " + player + "\n" +
                        "The computer chose " + computer + "\n" +
                        "You win! Paper beats Rock!");
        }
        else {
            computerWins++
            console.log("You chose " + player + "\n" +
                        "The computer chose " + computer + "\n" +
                        "You Lose! Scissors beat Paper!");
        }
    }
    else {
        if (computer === "rock") {
            computerWins++
            console.log("You chose " + player + "\n" +
                        "The computer chose " + computer + "\n" +
                        "You Lose! Rock beat Scissors");
        }
        else {
            playerWins++
            console.log("You chose " + player + "\n" +
                        "The computer chose " + computer + "\n" +
                        "You Win! Scissors beat Paper!");
        }
    }
}

function game() {
    tieCounter = 0;
    playerWins = 0;
    computerWins = 0;
    for (i = 0; i < 5; i++) {
        let choice = prompt("Please choose between Rock, Paper or Scissors");
        playRound(choice, computerPlay());
    }
    
}

game();