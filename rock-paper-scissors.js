 
 playerScore =0;
 computerScore = 0;
 drawScore = 0;

  var RPS = ['rock' ,'paper' , 'scissors'];
    
    let computerPlay = (RPS)=>{
      return RPS[Math.floor(Math.random() * RPS.length)];
    }

    let playRound=(playerSelection, computerSelection)=> {
      let isPlayerWin = false;
      let isDrawWin = false;
      let isComputerWin = false;

      if(playerSelection === computerSelection){
        drawScore++;
        isDrawWin = true;
      }
      else if((playerSelection === "rock") && (computerSelection === "scissors")){
        playerScore++;
        isPlayerWin = true;
        
      }
      else if((playerSelection === "paper") && (computerSelection === "rock")){
        playerScore++;
        isPlayerWin = true;
      }
      else if((playerSelection === "scissors") && (computerSelection === "paper")){
        playerScore++;
        isPlayerWin = true;
      }
      else if((playerSelection === "rock") && (computerSelection === "paper")) {
        computerScore++;
        isComputerWin = true;
      }
      else if((playerSelection === "scissors") && (computerSelection === "rock")){
      computerScore++;
      isComputerWin = true;
      }
      else if((playerSelection === "paper") && (computerSelection === "scissors")){
        computerScore++;
        isComputerWin = true;
      }  
    }
    
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button)=>{
      button.addEventListener('click', ()=>{
        let playerSelection = button.className;
        let computerSelection = computerPlay(RPS);
        playRound( playerSelection, computerSelection);
        handleUpdate();
        game();
        
      });
    });
        
        function handleUpdate(){
        document.getElementById('playerResult').textContent = `Player: ${playerScore}`;
        document.getElementById('computerResult').textContent= `Computer: ${computerScore}`;
        document.getElementById('drawResult').textContent= `Draw : ${drawScore}`;
        }

        function game(){
         
         if(playerScore===5){
          document.getElementById('displayResult').textContent = (`PLAYER WINS! Player score is ${playerScore} while computer score is ${computerScore} and draw score is ${drawScore}`);
          document.querySelector('.rock').disabled = true;
          document.querySelector('.paper').disabled = true;
          document.querySelector('.scissors').disabled = true;
        }else if(computerScore===5){
          document.getElementById('displayResult').textContent=(`COMPUTER WINS! YOU LOSE! Computer score is ${computerScore} while playerScore is ${playerScore} and draw Score is ${drawScore}`);    
          document.querySelector('.rock').disabled = true;
          document.querySelector('.paper').disabled = true;
          document.querySelector('.scissors').disabled = true;
        }
}

     