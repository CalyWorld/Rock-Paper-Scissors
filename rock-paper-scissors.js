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

  let playerScore = 0;
  let computerScore = 0;
  let drawScore = 0;

function playRound(playerSelection, computerSelection){
  
  if((playerSelection === "rock") && (computerSelection === "Rock")){
    drawScore++;
      return (
        "DRAW - player chose: " +
                    playerSelection +
                                  " &" +
                                     " computer chose: " +
                            computerSelection
            );
  }
  else if((playerSelection === "paper") && (computerSelection === "Paper")){
    drawScore++;
      return (
        "DRAW - player chose: " +
                    playerSelection +
                                  " &" +
                                     " computer chose: " +
                            computerSelection
            );
  }
  else if((playerSelection === "scissors") && (computerSelection === "Scissors")){
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
  function game(){
   for(let i=1; i<=5; i++){
    let playerSelection = prompt(("Enter a string").toLowerCase());
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    
   }
    console.log ("draw score " + drawScore);
    console.log ("player score " + playerScore);  
    console.log ("player score " + computerScore);  
   }

   game(); 
   
     
    
   
  
 
  

   