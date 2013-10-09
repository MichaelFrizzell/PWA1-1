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
 var random = ~~(Math.random() * 11), //Create a variable to store a random integer within the range 1-10.
     query = document.getElementById("input"), 
     result = document.getElementById("output"), //Create variables that reference the DOM(html) elements.
     guessButton = document.querySelector('button');
 console.log("Random number: ", random);
 console.log("Input element: ", query);
 console.log("Output element: ", output);

 function button_click(event) {
   console.log("Button clicked");
 }

 guessButton.addEventListener('click', button_click, false); // Create an .addEventListner event listener on the guess button to listen for a click event. 

})(); 

