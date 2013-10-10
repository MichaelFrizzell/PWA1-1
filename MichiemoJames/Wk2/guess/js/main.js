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
     guessButton = document.querySelector('button');
 console.log("Random number: ", random);
 console.log("Input element: ", query);
 console.log("Output element: ", output);

 function button_click(event) {
   if(query != "" && query > 0 && query < 11){
   query = document.getElementById("input").value;
   var numEval = function(){
     if(query === random){
       console.log("correct");
     }else if(query > random){
       console.log("lower");
     }else if(query < random){
       console.log("higher");
     }
   }(); // When the guess button is clicked, evaluate your guess with the number the computer has chosen.
   } // validate
 }

 guessButton.addEventListener('click', button_click, false); // Create an .addEventListner event listener on the guess button to listen for a click event. 

})(); 

