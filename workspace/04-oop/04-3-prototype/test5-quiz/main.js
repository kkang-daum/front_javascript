"use strict"

function School(kor, eng){
  this.kor = kor 
  this.eng = eng 
  School.prototype.sum = function(){
    return this.kor + this.eng
  }
  School.prototype.avg = function(){
    return Math.round(this.sum() / 2)
  }
}

let school1 = new School(100, 85);
console.log("school sum", school1.sum());//school sum 185
console.log("school avg", school1.avg());//school avg 93

function HighSchool(kor, eng){
  School.apply(this, [kor, eng])
}
HighSchool.prototype = School.prototype
HighSchool.prototype.grade = function(){
  let grade = 'F'
  let avg = this.avg()
  if(avg >= 90){
    grade = 'A'
  }else if(avg >= 80){
    grade = 'B'
  }else if(avg >= 70){
    grade = 'C'
  }else if(avg >= 60){
    grade = 'D'
  }
  return grade
}
let high1 = new HighSchool(100, 85)
console.log("highschool sum", high1.sum());//highschool sum 185
console.log("highschool avg", high1.avg());//highschool avg 93
console.log("highschool grade", high1.grade())//highschool grade A

console.dir(high1)
//this - kor, eng
//prototype - avg, sum , grade

