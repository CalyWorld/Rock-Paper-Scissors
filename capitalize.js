var word = prompt("Enter a word");

function capitalize(newWord){
  let str = newWord.charAt(0);
  let capitalizedWord = str.toUpperCase();
  return capitalizedWord;
  }


 
console.log(capitalize(word));
