// Modify the code to show the correct prototype chain.

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeof(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);
