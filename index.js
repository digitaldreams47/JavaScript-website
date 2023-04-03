/* Variables

 let studentAge = 21; // number
 let firstName = "Hila Serban"; // numbers
 let student = false; // boolean

 studentAge += 1;


 console.log("Hello " + firstName);
 console.log("You are: " + studentAge + " years old");
 console.log("Enrolled: " + student);

 document.getElementById("p1").innerHTML = "Hello, " + firstName;
 document.getElementById("p2").innerHTML = "You are, " + studentAge + " years old";
 document.getElementById("p3").innerHTML = "Enrolled: " + student;

 Arithmetic expressions

 let students = 20;

students += 1;
students -= 1;
students *= 1;
students /= 1;
let extraStudents;
extraStudents = students % 3;

console.log("students: " + students);
console.log("extraStudents: " + extraStudents);


let result = 1 + 2 * (3 + 4);
console.log("result: " + result);

*/

/* Accept user input

 let userName = window.prompt("What`s your name?");
 console.log("userName: " + userName);
 let userName;

 document.getElementById("myButton").onclick = function(){
   userName = document.getElementById("textName").value;
   console.log("userName: " + userName);
   document.getElementById("myLabel").innerHTML = "Hello " + userName + ":";
 }



 document.getElementById("textName").value = "Serban";

 */

/* Type Conversions
 user input is a string

 let age = window.prompt("How old are you?");

 console.log(typeof age);

  age = Number(age);
  age += 1;

console.log("Age: " + age);

 let x;
 let y;
 let z;

 x = Number("3.14");
 y = String(3.14);
 z = Boolean("");

 console.log(x, typeof x);
 console.log(y, typeof y);
 console.log(z, typeof z);

*/

/* Const variable = a variable that cannot be changed

 const PI = 3.14159;
 let radius;
 let circumference;

 radius = window.prompt("Enter the radius of a circle: ");
 radius = Number(radius);

 circumference = 2 * PI * radius;

 console.log("Circumference is :" + circumference);

*/

/* Math object

 let x = -3.14;
 let y = 5;
 let z = 9;
 let maximum;
 let minimum;

 x = Math.round(x); // round to nearest
 x = Math.floor(x); // round to floor 
 x = Math.ceil(x); // round to ceil
 x = Math.pow(x, 5);
 x = Math.sqrt(x);
 x = Math.abs(x);
 maximum = Math.max(x, y);
 minimum = Math.min(x, y);
 console.log(maximum);
 console.log(minimum);

 x = Math.PI;
 console.log(x)

*/

/* Hypotenuse of a right angle triangle

 let a;
 let b;
 let c;

a = window.prompt("Enter side A: ");
a = Number(a);

b = window.prompt("Enter side B: ");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

console.log("Hypotenuse is : " + c);

 document.getElementById("submitButton").onclick = function(){
   a = document.getElementById("aTextBox").value;
   a = Number(a);

   b = document.getElementById("bTextBox").value;
   b = Number(b);

   c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

   document.getElementById("cLabel").innerHTML = "Side C: " + c;
 }
*/

/* Count program

 let count = 0;

 document.getElementById("decreaseBtn").onclick = function(){
   count -= 1;
   document.getElementById("countLabel").innerHTML = count;
 }

 document.getElementById("resetBtn").onclick = function(){
   count = 0;
   document.getElementById("countLabel").innerHTML = count;
 }

  document.getElementById("increaseBtn").onclick = function(){
   count += 1;
   document.getElementById("countLabel").innerHTML = count;
 }
*/


/* Random number generator */
let x;
let y;
let z;


document.getElementById("rollButton").onclick = function() {
  x = Math.floor(Math.random() * 6) + 1;
  y = Math.floor(Math.random() * 6) + 1;
  z = Math.floor(Math.random() * 6) + 1;

  document.getElementById("xLabel").innerHTML = x;
  document.getElementById("yLabel").innerHTML = y;
  document.getElementById("zLabel").innerHTML = z;
}