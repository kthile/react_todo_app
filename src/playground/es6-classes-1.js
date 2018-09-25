class Person {
  constructor(name = "Default", age = 0) {
    this.name = name; //use the name if provided, otherwise default to test
    this.age = age;
  }
  getGreeting() {
    return `Hi I am ${this.name}`;
  }
  getDesc() {
    return `Hi I am ${this.name}, I am ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // call the parent constructor function first
    this.major = major;
    //we don't need to add name and age again because it's a child of Person
  }
  hasMajor() {
    return !!this.major;
  }
  //get parent getDesc data and add onto it
  getDesc() {
    let description = super.getDesc();
    if (this.hasMajor()) {
      description = description + ` My major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  
  hasHomeLoc() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasHomeLoc() == true) {
      greeting = greeting + ` I'm visiting  from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Student("Student", 55, "bio");
console.log(me.getDesc());

const you = new Traveler("Traveler", 21, "Texas");
console.log(you.getGreeting());

const someone = new Traveler("Traveler2", 10);
console.log(someone.getGreeting());
