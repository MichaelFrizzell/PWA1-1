// constructor
var Student = function(name,street,city,state,gpa,date){
  this.name = name;
  this.address = street + ', ' + city + ', ' + state;
  this.gpa = gpa;
  this.date = date.toLocaleDateString();
  this.avg = 0;
}

// globalize constructor
window.Student = Student;


// calculate average
Student.prototype.avggpa = function(){
  var gpaTotal = this.gpa[0] + this.gpa[1] + this.gpa[2];
  var gpaavg = gpaTotal/3;
  this.avg = gpaavg.toFixed(2);
};
  
