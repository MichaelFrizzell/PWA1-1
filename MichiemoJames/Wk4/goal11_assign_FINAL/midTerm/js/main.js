/*
	* Final for PWA-1
  * James Michiemo
  * October 24, 2013 
*/

(function(){
  
  // create an empty students array
  var students = [];

  // replace the student objects with constructor calls
  var first = new Student('James','3098 Whisper Lane','Orlando','Florida',[4.0,3.1,3.7], new Date()),
      second = new Student('John','606 Saint Rd','Dallas','Texas',[4.0,3.1,3.7], new Date());

  // populate array with 2 objects of information
  students = [first,second];

var button = document.querySelector(".buttonred"),
  displayIndex = 0;

function infoDisplay(){
// calculate average before everything is displayed
createAvg();

// display all information in console.log
console.log("***** Below shows original object *****");
for(var i = 0; i<students.length; i++){
  console.log("Name: " + students[i].name);
  console.log("Address: " + students[i].address);
  console.log("GPA: " + students[i].gpa);
  console.log("Date: " + students[i].date);
  console.log("Average: " + students[i].avg);
};
var name = document.querySelector("#name"),
    address = document.querySelector("#address"),
    gpa = document.querySelector("#gpa"),
    date = document.querySelector("#date"),
    avg = document.querySelector('#gpaavg');


if(displayIndex<students.length){
name.innerHTML = "Name: " + students[displayIndex].name;
address.innerHTML = "Address: " + students[displayIndex].address;
gpa.innerHTML = "GPA: " + students[displayIndex].gpa,
date.innerHTML = "Date: " + students[displayIndex].date;
avg.innerHTML = "Average GPA: " + students[displayIndex].avg;
displayIndex+=1;
}else{
    button.innerHTML = "Done!";
    button.removeEventListener('click', infoDisplay, false);
}

};

infoDisplay();

// Add new object to array above

var third = new Student('Naomi', '808 Aloma Ln', 'Winter Park', 'FL', [2.9,3.9,3.8], new Date());
students.push(third);

button.addEventListener("click", infoDisplay, false);

function createAvg(){
  students.forEach(function(e){
    e.avggpa();
  });
};
createAvg();

})();
