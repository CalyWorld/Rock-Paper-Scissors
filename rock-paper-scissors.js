  var RPS = ['rock' ,'paper' , 'scissors'];
  
  let computerPlay = (RPS)=>{
    return RPS[Math.floor(Math.random() * RPS.length)];
  }
  
    var playerScore = 0;
    var computerScore = 0;
    var drawScore = 0;

  let playRound=(playerSelection, computerSelection)=> {
    
    if(playerSelection === computerSelection){
      drawScore++;
       return (`IT'S A TIE- player chose ${playerSelection} while computer chose ${computerSelection}
      `);
    }
    else if((playerSelection === "rock") && (computerSelection === "scissors")){
      playerScore++;
      return (`WIN - player chose ${playerSelection} while computer chose ${computerSelection}
      `);
      
    }
    else if((playerSelection === "paper") && (computerSelection === "rock")){
      playerScore++;
      return (`WIN - player chose ${playerSelection} while computer chose ${computerSelection}
      `);
    }
    else if((playerSelection === "scissors") && (computerSelection === "paper")){
      playerScore++;
      return (`WIN - player chose ${playerSelection} while computer chose ${computerSelection}
      `);
    }
    else if((playerSelection === "rock") && (computerSelection === "paper")) {
      computerScore++;
      return(`LOST - player chose ${playerSelection} while computer chose ${computerSelection}
      `);
    }
    else if((playerSelection === "scissors") && (computerSelection === "rock")){
    computerScore++;
    return(`LOST - player chose ${playerSelection} while computer chose ${computerSelection}
      `);
    }
    else if((playerSelection === "paper") && (computerSelection === "scissors")){
      computerScore++;
      return(`LOST - player chose ${playerSelection} while computer chose ${computerSelection}
      `);
    }  
  }
    let game = ()=>{

    for(let i=1; i<=5; i++){
      let playerSelection = prompt("Enter a string").toLowerCase();
      let computerSelection = computerPlay(RPS);
      console.log(playRound(playerSelection, computerSelection));
    }

      if(playerScore===computerScore)
      console.log(`ITS A TIE, draw score is ${drawScore} while player score is ${playerScore} and computer score is ${computerScore}`);
      

      else if(playerScore>computerScore)
      console.log (`PLAYER WINS and player score is ${playerScore} while computer score is ${computerScore} and draw score is ${drawScore}`);  

      
      else if(computerScore>playerScore)
      console.log (`COMPUTER WINS, YOU LOSE! and computer score is ${computerScore} and playerScore ${playerScore} while draw Score is ${drawScore}`); 
        
    }
    
          game(); 
    