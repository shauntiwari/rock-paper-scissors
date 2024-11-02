
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    let rockBtn = document.querySelector("#rockBtn");
    let paperBtn = document.querySelector("#paperBtn");
    let scissorsBtn = document.querySelector("#scissorsBtn");

    rockBtn.addEventListener("click", () => playRound('Rock'));
    paperBtn.addEventListener("click", () => playRound('Paper'));
    scissorsBtn.addEventListener("click", () => playRound('Scissors'));

    // console.log('Final Score | Computer: ' + computerScore + ' | You: ' + humanScore);
    
    // if (humanScore > computerScore) {
    //     console.log("You win! Computer loses!");
    // }
    // else if (computerScore > humanScore) {
    //     console.log("Computer wins! You lose!")
    // }
    // else {
    //     console.log("It's a tied game!")
    // }

    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();
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

        const result = document.querySelector("#results");
        result.textContent = 'Scoreboard | Computer: ' + computerScore + ' | You: ' + humanScore
    }
}

playGame();