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

Student.prototype.avg = function(){
  var gpaTotal = this.gpa[0] + this.gpa[1] + this.gpa[2];
  var avg = gpaTotal/3;
  this.avg = avg.toFixed(2);
};
  
