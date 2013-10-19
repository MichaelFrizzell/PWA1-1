/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 * Name: James Michiemo
 * Date: 19OCT2013
 */

(function(){

  var names = ['Jeff','Abed','Britta','Annie','Shirley'],
      people = [];


  for(var i=0;i<3;i++){
    var index = ~~(Math.random()*names.length);
    var person = new Person(names[index],i+1);
    people.push(person);
    console.log(people);
  }



})();

