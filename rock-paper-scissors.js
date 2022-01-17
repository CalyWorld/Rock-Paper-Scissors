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
var userNum = prompt("Enter a string").toLowerCase();
function playRound(playerSelection, computerSelection){

 let playerScore = 0;
 let  computerScore = 0;
 let  drawScore=0;

  if(playerSelection === computerSelection){
    drawScore++;
      return (
        "DRAW - player chose: " +
                    playerSelection +
                                  " &" +
                                     " computer chose: " +
                            computerSelection
            );
  }
  else if((playerSelection === "rock") && (computerSelection === "Scissors")){
    playerScore++;
    return (
      "WIN - player chose: " +
                  playerSelection +
                                  " &" +
                                     " computer chose: " +
                            computerSelection
            );
    
  }
  else if((playerSelection === "paper") && (computerSelection === "Rock")){
    playerScore++;
    return (
      "WIN - player chose: " +
                  playerSelection +
                                  " &" +
                                     " computer chose: " +
                            computerSelection
            );
  }
  else if((playerSelection === "scissors") && (computerSelection === "Paper")){
    playerScore++;
    return (
      "WIN - player chose: " +
                  playerSelection +
                                  " &" +
                                     " computer chose: " +
                            computerSelection
            );
  }
  else if((playerSelection === "rock") && (computerSelection === "Paper")) {
    computerScore++;
    return(
        "LOST - player chose " +
                    playerSelection +
                                  " &" +
                                     " computer chose: " +
                            computerSelection
    );
  }
  else if((playerSelection === "scissors") && (computerSelection === "Rock")){
   computerScore++;
    return(
        "LOST - player chose " +
                    playerSelection +
                                  " &" +
                                     " computer chose: " +
                            computerSelection
    );
  }
  else if((playerSelection === "paper") && (computerSelection === "Scissors")){
    computerScore++;
    return(
        "LOST - player chose " +
                    playerSelection +
                                  " &" +
                                     " computer chose: " +
                            computerSelection
    );
  }
}
  
  let computerSelection = computerPlay();
  let playerSelection = userNum;
  
  
  function game(){
   console.log(playRound(playerSelection, computerSelection));
    console.log(playRound(playerSelection, computerSelection));
     console.log(playRound(playerSelection, computerSelection));
   
   }

   game();