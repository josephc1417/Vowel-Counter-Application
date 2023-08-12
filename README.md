# Vowel Counter Application



## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Learnings](#learnings)
- [Challenges Faced](#challenges-faced)
- [Installation and Usage](#installation-and-usage)
- [Screenshots](#screenshots)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## Project Overview
A simple web application that takes user input, process it, and displays the result.
The main goal of this project is to count the number of vowels in a given input word and provide feedback to the user. It provided really good practice for creating a basic user interface.

## Technologies Used

- HTML - This was used to structure the interface, create input fields, buttons and result displays. 
- CSS - This will be used to style the elements, making your the app more user friendly and visually appealing. 
- JavaScript - This was the core technology used to handle the apps functionality. With it, we can collect user input, manipulate strings, and update the DOM. 

## Features

- Input Field: Simple input field where users can enter a word.
- Check Button: This button triggers a vowel counting process when clicked.
- Vowel Counting Logic This is where the JavaScript come into play. It processes the input word, counts the number of vowels using a `for-loop` and regular expressions, and then displays the results.
- Result and Display The application shows the `input word in uppercase` along with the `vowel count`.
- User-Friendly Interface.

## Learnings


- DOM manipulation: I learned how to work within, and manipulate, the Document Object Model (DOM) to update and display content dynamically based on user interaction. 
- Basic Programming Logic: Implementing the vowel counting logic required writing a loop and using regular expressions and methods, that ultimately helped build a foundation understanding for developing better programming skills.
- Event Handling: I learned how to implement event listeners to respond to users actions, such as button clicks.

## Challenges Faced

- Variable Scope: Understanding variable scope and where variables can be accessed in different parts of the code base.
- Debugging: Debugging syntax errors, method implementation, logical issues, and unexpected issues like the check button not working or displaying the correct result.
- Algorithmic Thinking: Thinking about how to solve the problem and breaking it down into smaller steps instead of just jumping right into coding. 
```
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
```

## Installation and Usage

1. Clone this repository: `git clone https://github.com/josephc1417/Vowel-Counter-Application.git`
2. Open `index.html` in your web browser.
3. Start adding and managing your tasks!

## Screenshots

![Screenshot 1](./Images/Screenshot%202023-08-12%20191325.png)


## Acknowledgments

I want to thank `Udemy-100 days of JavaScript` for their tutorial on DOM manipulation, which helped me understand the core concepts.
Special thanks to `Ewomazino Akpareva` for providing feedback and suggestions during the development process.

## Contact

Feel free to reach out to me on LinkedIn for any questions or feedback.
