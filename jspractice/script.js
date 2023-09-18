var name = 'TALHA';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').onclick = () => {
        alert(`hello ${name} `);
        
       // You can access other elements here, e.g., document.querySelector('option')
    }
    
});

console.log('hello');
console.log(this);
function Circle(radius){
    console.log(this);
}
var myCircle = new Circle(10);
debugger;
console.log(myCircle);

function a() {
    var ae = 'Ruko jara sabar karo';
    debugger;
    console.log(ae);
    b();
}
function b() {
    var be = 'chal baap ko mat sikha ';
    debugger
    console.log(be);
    c();
}
function c() {
    var ce = "jaha se hum khade hote line vahi se suro hoti hai"
    console.log(ce);
}
a();
//constructor function

function Person (name,age){
    this.name = name;
    this.age = age;
}
//creating instance using new
debugger;
const person1 = new Person('John',22);
const person2 = new Person('Cornor', 28);
debugger;
console.log(person1.name);
console.log(person2.age);
 /***** */

 function Circle(radius){
    this.radius = radius;
    this.Area = function(){
        //return Math.PI * Math.pow(this.radius,2);
    }
 }
  var myCircle = new Circle(10);
  console.log(myCircle.Area() + "m Sq");

  // you can use better code than the above


Circle.prototype.Area = function(){
    return Math.PI * Math.pow(this.radius,2);
}
  var myCircle = new Circle(10);
  console.log(myCircle);
  var myCircle2 = new Circle(20);
  console.log(myCircle2);

 