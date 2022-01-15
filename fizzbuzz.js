
let answer = parseInt(prompt("Please enter a number ")); //prompts a a little pop up that allows user to enter a number (converts the string into int)

function fizzbuzz(newAnswer){ //passes the variable answer into new variable in function newAnswer

  for(let i = 1; i <= newAnswer; i++){ //declare a variable i, assigns it to 1(initial value), checks if our variable is less than or equal to i (condition), increments it by 1(i++) every iteration..so if user enters 10, our loop goes from 1-10.
    if(i % 3 === 0 && i % 5 === 0){ // checks if i is divisible by 3 and i  is divisible by 5 
      console.log("fizzbuzz"); // if true,prints fizzbuzz
    }

    else if(i % 3 === 0){ // % sign is used to check for remainder.. so what this does, is it divides i by 3, then if it returns 0, 

      console.log("fizz"); // it prints fizz, showing i is divisible by 3..

    }else if(i % 5 === 0){ // passes the first if test, then proceeds to check if i is divisble by 5

      console.log("buzz"); // it prints buzz if i is divisible by 5.

    }else{

      console.log(i); //prints i because it failed the if statement

    }

  }
  return i; // returns i
}
console.log(fizzbuzz(answer));