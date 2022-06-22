
//generate random computerPick//
function computerPlay(){
    let pick=Math.floor(Math.random() * 3) ;
    if (pick==0) {
        return 'rock'
    }

    else if (pick==1){
        return 'paper'

    }

    else {

        return 'scissors'
    }



}


let playerScore =0;
let computerScore=0;


//determine winner
function playRound(playerSelection,computerSelection){
    
    playerSelection=playerSelection.toLowerCase();
    if (playerSelection==='rock'){
        if (computerSelection==='paper'){
            return "You Lost! Paper beats Rock"
            computerScore++;
            game(playerScore,computerScore);
        }
        else if (computerSelection ==='scissors'){
            return "You Won! Rock beats Scissors"
            playerScore++;
            game(playerScore,computerScore);

        }
        else {
            return "This is Tie!"
        }
    }

    if (playerSelection==='paper'){
        if (computerSelection==='rock'){
            playerScore++;
            game(playerScore,computerScore);
            return "You Won! Paper beats Rock"


        }
        else if (computerSelection ==='scissors'){
            computerScore++;
            game(playerScore,computerScore);
            return "You Lost! Scissors beats Paper"


        }
        else {
            return "This is Tie!"
        }
    }

    if (playerSelection==='scissors'){
        if (computerSelection==='rock'){
            computerScore++;
            game(playerScore,computerScore);
            return "You Lost! Scissors beats Rock"


        }
        else if (computerSelection ==='rock'){
            playerScore++;
            game(playerScore,computerScore);
            return "You Won! Rock beats Scissors"


        }
        else {
            return "This is Tie!"
        }

    }

}

let playerSelection = prompt();

// const playerSelection = "ROCK";

const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));


//play 5 round determine final winner
function game(playerScore,computerScore){
    if (playerScore==5 || computerScore==5){
        if (playerScore>computerScore){
            return "You are the Winner!"
        }
        else{
            return "Computer is the Winner!"
        }
    }
}

console.log(playerScore);
console.log(computerScore);