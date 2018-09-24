console.log("test");

//arguments - no longer bound
/*const add = function(a, b) {
  console.log(arguments);
  return a + b;
};*/
const add = (a, b) => a + b;
//console.log(arguments); Use ES5 FUNCTION if u need access to this
console.log(add(50, 50));

//this keyword no longer bound
const user = {
  name: "Andrew",
  cities: ["City1", "City2", "City3"],
  printPlacesLived() {
    //map is good for transforming data without affecting array data
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};
console.log(user.printPlacesLived());
//user.printPlacesLived();

const multiplier = {
  numbers: [10, 20, 30],
  // numbers array
  multiplyBy: 3,
  // multiplyBy - single number
  multiply() {
    return this.numbers.map(
      number => "New Number: " + number * this.multiplyBy
    );
  },
  original() {
    return this.numbers.map(number => "Old Number: " + number);
  }
};
console.log(multiplier.original());
console.log(multiplier.multiply());
