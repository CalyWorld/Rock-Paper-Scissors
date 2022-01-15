
var userNum = parseInt(prompt("Enter a number "));

function Factorial(num){

  let newNum = 1;
  
  for(let i = 1; i <= num; i++){
    newNum = newNum * i;
  }
  return newNum;

}
console.log(Factorial(userNum));