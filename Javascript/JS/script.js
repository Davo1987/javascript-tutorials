// Get computer to return 'rock' 'paper' or 'scissors'

function getComputerChoice() {
    //use math.random and multiply by 3 to get a random integer that is either 0, 1, or 2
    let randomNumber = Math.floor(Math.random() * 3);
    //assign 0 to rock
    if (randomNumber === 0) {
        return 'rock';
    //assign 1 to paper
    } else if (randomNumber === 1) {
        return 'paper';
    //assign 2 to scissors
    } else if (randomNumber === 2) {
        return ('scissors')
    }
}

// Delcare a new function for user choice
let btn = document.querySelectorAll('button');

for ( const button of btn) {
    button.addEventListener('click', () => {
        let humanChoice = button.textContent.toLowerCase();
        document.querySelector('#playerSelection').textContent = `You chose: ${humanChoice}`;
        console.log(humanChoice);

        let computerChoice = getComputerChoice();
        document.querySelector('#computerSelection').textContent = `Computer chose: ${computerChoice}`;
        console.log(computerChoice);

        playRound(humanChoice, computerChoice);
    })
}

// Delcare score tally variables for the round
let humanScore = 0;
let computerScore = 0;

// Delcare function to play round
function playRound(humanChoice, computerChoice) {

    if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
        )
    {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    if (humanScore === 5 || computerScore === 5) {
        const finalResult = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
        document.querySelector('#finalResult').textContent = finalResult;
    }

    document.querySelector('#playerScore').textContent = `Your score: ${humanScore}`;
    document.querySelector('#computerScore').textContent = `Computer score: ${computerScore}`;
}