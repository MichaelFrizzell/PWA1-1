/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 * Name: James Michiemo
 * Date: 19OCT2013
 */

(function(){
  var Person = function(name,row){
    this.name=name;
    this.action=Person.actions[~~(Math.random()*Person.actions.length)];
    this.job=Person.jobs[~~(Math.random()*Person.jobs.length)];
    this.row=row;

    var write = document.getElementById("r"+this.row+"c3");
    write.innerHTML=this.action;
  };

  Person.prototype.update=function(){
    console.log("trigger");
  };


  window.Person = Person;

  Person.jobs=["Lawyer","Director","Psychologist","Forensics","Manager"];
  Person.actions=["study","sleep","eat"];

})();
