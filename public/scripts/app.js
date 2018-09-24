"use strict";

var square = function square(x) {
  return x * x;
};
console.log("normal function: " + square(2));

//arrow version
var squareArrow = function squareArrow(x) {
  return x * x;
};
console.log("arrow function: " + squareArrow(2));

var squareArrow2 = function squareArrow2(x) {
  return x * x;
};
console.log("arrow functionv2: " + squareArrow2(2));

//firstname = fullName.split(' ')[0];
/*arrow function format: 
const variableName = (argument) => 
*/

var fullName = "Mike Smith";
console.log(fullName);

var getFirst = function getFirst(name) {
  return name.split(' ')[0];
};
console.log(getFirst(fullName));

var getFirstv2 = function getFirstv2(name) {
  return name.split(' ')[0];
};
console.log(getFirstv2(fullName));

var printName = function printName(myName) {
  return myName;
};
console.log(printName('Bobbie'));
