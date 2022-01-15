function computerPlay(){
    let randomNumber= Math.floor(Math.random() * 3);

    if(randomNumber === 0){
      return ("Rock");
    }
    else if(randomNumber === 1){
      return "Paper";
    }
    else if(randomNumber === 2){
      return "Scissors";
    }
}

var userNum = prompt("Enter a string ").toLowerCase();

function playRound(playerSelection, computerSelection){



  if((playerSelection === "rock") && (computerSelection === "Rock")){
    return "its a tie";
  }
  else if((playerSelection === "paper") && (computerSelection === "Paper")){
    return "its a tie";
  }
  else if((playerSelection === "scissors") && (computerSelection === "Scissors")){
    return "its a tie";
  }

  else if((playerSelection === "rock") && (computerSelection === "Scissors")){
    return "You Win! Rock beats Scissors";
  }
  else if((playerSelection === "paper") && (computerSelection === "Rock")){
    return "You win! Paper beats Rock";
  }
  else if((playerSelection === "scissors") && (computerSelection === "Paper")){
    return "You win! Scissors beats Paper";
  }
  else if((playerSelection === "rock") && (computerSelection === "Paper")) {
    return "You Lose! Paper beats Rock";
  }
  else if((playerSelection === "scissors") && (computerSelection === "Rock")){
    return "You Lose! Rock beats Scissors";
  }
  else if((playerSelection === "paper") && (computerSelection === "Scissors")){
    return "You Lose! Scissors beats Paper";
  }

  
  

}
  let playerSelection = userNum;
  let computerSelection = computerPlay();

 

function game(){

  for(let i = 0; i<=5; i++){
    const playerScore = playerSelection();
    const computerScore = computerSelection();
  
  let result = console.log(playRound(playerScore, computerScore));
  }
  
}









