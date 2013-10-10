/**
 * GUESSING GAME:
 *
 * Created By: James Michiemo
 * Date: October 9, 2013 
 * 
 * GUESSING GAME
 */

//Game variables
(function (){
 var random = String(~~(Math.random() * 10 + 1)), //Create a variable to store a random integer within the range 1-10.
     query = document.getElementById("input").value, 
     result = document.getElementById("output"), //Create variables that reference the DOM(html) elements.
     guessButton = document.querySelector('button'),
     gameOver = false;
 console.log("Random number: ", random);
 console.log("Input element: ", query);
 console.log("Output element: ", output);

 function button_click(event) {
   if(query != "" && query > 0 && query < 11 && gameOver === false){
   query = document.getElementById("input").value;
   var numEval = function(){
     if(query === random){
       console.log("correct");
       output.innerHTML = "You guessed the correct number.";
       gameOver = true;
     }else if(query > random){
       console.log("lower");
       output.innerHTML = "The number you selected is too high. Try again.";
     }else if(query < random){
       console.log("higher");
       output.innerHTML = "The number you selected is too low. Try again.";
     } 
   }(); // When the guess button is clicked, evaluate your guess with the number the computer has chosen.
   }else if(gameOver === true){
    output.innerHTML = "Refesh your web browser to play again."
   } // validate
 }

 guessButton.addEventListener('click', button_click, false); // Create an .addEventListner event listener on the guess button to listen for a click event. 

})(); 

