
'use strict';
document.write("1. Takes a positive number from the user.");
document.write("<br/>");
let num;

do {
  num = prompt("Enter a positive number to print ur array?", 0);
} while (num <0);
document.write(num);
document.write("<br/>");

document.write("2. Makes an array of numbers till the number given by user");
document.write("<br/>");
var foo = [];

for (var i = 1; i <= num; i++) {
   foo.push(i);
}
document.write(foo);
document.write("<br/>");
document.write("3. Use higher order function to filter the odd numbers");
document.write("<br/>");
let odd=foo.filter(el=>el%2==1)
document.write(odd);
document.write("<br/>");
document.write(" 4. Generate and array of the cubes of the filtered numbers");
document.write("<br/>");
let cube=foo.filter(el=>el%2==1).map(el=>el**3)
document.write(cube);
