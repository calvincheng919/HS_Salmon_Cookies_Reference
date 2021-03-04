'use strict'

console.log('hello world');

// I want to add 2 numbers.

//a function is an action.
function add(a,b) {
  return a+b
}


// We can create properties name, age, pet, email, and getMyInfo
// getMyInfo is a special property called a method
// a method is nothing more than a function that is inside of an object
// When inside an object, 'this' refers to the object itself.

let Person = {

  name: "Calvin",
  age: 49,
  pet: true,
  email: "calvin@calvin.com",
  getMyInfo: function() {
    console.log('name: ', this.name, 'age: ', this.age, 'email: ', this.email)
  }
}

console.log(Person.getMyInfo());