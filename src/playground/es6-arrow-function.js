const square = function(x) {
  return x * x;
};
console.log("normal function: "+square(2));

//arrow version
const squareArrow = (x) => { return x*x; }
console.log("arrow function: "+squareArrow(2));

const squareArrow2 = (x) => x * x;
console.log("arrow functionv2: "+squareArrow2(2));

//firstname = fullName.split(' ')[0];
/*arrow function format: 
const variableName = (argument) => 
*/

const fullName = "Mike Smith";
console.log(fullName);

const getFirst = (name) => {
    return name.split(' ')[0];
}
console.log(getFirst(fullName));

const getFirstv2 = (name) => name.split(' ')[0];
console.log(getFirstv2(fullName));

const printName = (myName) => myName;
console.log(printName('Bobbie'));