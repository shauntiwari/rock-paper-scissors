
function getComputerChoice(){
    let random = Math.ceil(Math.random() * 3);
    
    if (random === 1) {
        return 'rock';
    }
    else if (random === 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function getHumanChoice() {
    const input = prompt('Hello, choose r for rock, p for paper, or s for scissors!');
    if (input === 'r' || input === 'R'){
        return 'rock';
    }
    else if (input === 'p' || input === 'P'){
        return 'paper';
    }
    else if (input === 's' || input === 'S'){
        return 'scissors';
    }
}

console.log('You chose' + ' ' + getHumanChoice());

console.log('Computer chose' + ' ' + getComputerChoice());