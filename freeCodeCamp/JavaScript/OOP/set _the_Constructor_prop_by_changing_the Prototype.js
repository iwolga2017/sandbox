// Define the constructor property on the Dog prototype.

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
