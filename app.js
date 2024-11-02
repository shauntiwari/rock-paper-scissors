
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

        const result = document.querySelector("#result");
        result.style.marginTop = '15px';
        result.textContent = 'Scoreboard | Computer: ' + computerScore + ' | You: ' + humanScore
        
        let winner = document.createElement("div");
        winner.style.marginTop = '15px';
        winner.style.fontSize = 'Large';

        if (humanScore === 5) {winner.textContent = 'You win!';}
        if (computerScore === 5) {winner.textContent = 'Computer wins!';}
        result.appendChild(winner);
    }
}

playGame();