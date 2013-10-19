/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 * Name: James Michiemo
 * Date: 19OCT2013
 */

(function(){

  var names = ['Jeff','Abed','Britta','Annie','Shirley'],
      people = []; // 5 name array

  for(var i=0;i<3;i++){
    var index = ~~(Math.random()*names.length);
    var person = new Person(names[index],i+1);
    people.push(person);

    populateHTML(person.name, "r"+(i+1)+"c1");
    populateHTML(person.job, "r"+(i+1)+"c2");
    names.splice(index,1); // no repeat

  }; // three instances

  function populateHTML(info,block){
    var entry = document.getElementById(block);
    entry.innerHTML = info;
  }; // create a function to populate dom

  interval = setInterval(runUpdate,1000/30);

  
  function runUpdate(){
    people.forEach(function(element){
      element.update();
    });
  };









})();

