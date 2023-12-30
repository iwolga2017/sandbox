// Refactor the function setGear inside the object bicycle 
// to use the shorthand syntax described above.

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};

bicycle.setGear(3);
cnsole.log(bicycle.gear);

bicycle.setGear(48);
console.log(bicycle.gear);
