//button 
const checkWordBtn = document.querySelector(".btn");
const result = document.querySelector(".result");
const inputWord = document.querySelector(".input-text");

checkWordBtn.addEventListener('click', countVowel);


// loop thorough the wordVal with for loop 
//

function countVowel() {
    let vowelCount  = 0;
    let wordVal = inputWord.value.toLowerCase();
    // alert(wordVal);
  

    for (let i = 0; i < wordVal.length; i++) {
        let letter = wordVal[i];
     
       if (letter.match(/[aeiou]/)) {
        vowelCount++;
       }
    }
    result.innerHTML = `${wordVal.toUpperCase()} has ${vowelCount} vowels `;
}

//Select classes from the the html document 
//when a button is clicked it needs to check to see if the word that is entered contains vowels 
// the 'check' button needs to have an event listener with two arguments (click, and the function that will execute upon clicking. )
// make all the DOM variables and event listeners global so that they can be accessed by the function 
// create a function called (countVowel)
// create a seperate variable that holds the value of the number of vowels within the input value
// create another variable that is assigned to the inputword.value and modify it to lowercase 
//Now loop thorugh the word letter by letter to see if any of the letters are vowels within the range given 
// use the .match() to select the range to be compared to and if there is a match, increment the vowelCount
// let result.innerHTML disply the word  and the number of vowels found within the word. 