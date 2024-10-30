
function getComputerChoice() {
    let random = Math.ceil(Math.random() * 3);
    
    if (random === 1) {
        return 'Rock';
    }
    else if (random === 2) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function getHumanChoice() {
    const input = prompt('Hello, choose Rock, Paper, or Scissors!');
    const choice = input.toLowerCase();
    if (choice === 'rock') {
        return 'Rock';
    }
    else if (choice === 'paper') {
        return 'Paper';
    }
    else if (choice === 'scissors') {
        return 'Scissors';
    }
    else {
        alert('Invalid choice!');
        return getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for (i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log('Final Score | Computer: ' + computerScore + ' | You: ' + humanScore);
    
    if (humanScore > computerScore) {
        console.log("You win! Computer loses!");
    }
    else if (computerScore > humanScore) {
        console.log("Computer wins! You lose!")
    }
    else {
        console.log("It's a tied game!")
    }

    function playRound(humanChoice, computerChoice) {
        console.log('You chose' + ' ' + humanChoice + ', Computer chose ' + computerChoice);
        
        if (humanChoice === computerChoice) {
            console.log("Tie game!");
        }
        else if (humanChoice === 'Rock' && computerChoice === 'Paper') {
            console.log('Computer wins!')
            computerScore++;
        }
        else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
            console.log('You win!')
            humanScore++;
        }
        else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
            console.log('Computer wins!')
            computerScore++;
        }
        else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
            console.log('You win!')
            humanScore++;
        }
        else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
            console.log('You win!')
            humanScore++;
        }
        else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
            console.log('Computer wins!')
            computerScore++;
        }

        console.log('Scoreboard | Computer: ' + computerScore + ' | You: ' + humanScore);
    }    
}

playGame();