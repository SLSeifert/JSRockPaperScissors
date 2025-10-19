/* function getComputerChoice() {
    const randomNum = (Math.floor(Math.random()*3));
    if (randomNum === 2) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
} */

function getComputerChoice() {
    randomNum = Math.floor(Math.random()*3);
    switch (randomNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    return prompt("rock, paper, or scissors?").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function getScore() {
    console.log(`Your score: ${humanScore}, Computers score: ${computerScore}`)
}

/* function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    if ((humanChoice === 'paper' && computerChoice === 'rock')
        || (humanChoice === 'scissors' && computerChoice === 'paper')
        || (humanChoice === 'rock' && computerChoice === 'scissors')) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else if (humanChoice === computerChoice) {
            console.log('Tie!')
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }

        getScore();

    
} */

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    const wins = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock'
    };

    if (computerChoice === wins[humanChoice]) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else if (humanChoice === computerChoice) {
        console.log('Tie!')
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }

    getScore();

}


function playGame() {
    for (let i =0; i < 5; i++) {
        playRound();
    }
    if (humanScore > computerScore) {
        console.log('GAME OVER. You are victorious!')
    } else if (humanScore === computerScore) {
        console.log('GAME OVER. TIE!');
    } else {
        console.log('GAME OVER. You have been defeated!')
    }

}



playGame();
