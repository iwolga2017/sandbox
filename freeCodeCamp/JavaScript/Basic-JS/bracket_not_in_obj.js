// Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.

const testObj = {

    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

const drinkValue = testObj["the drink"];
const entreeValue = testObj["an entree"];

console.log(drinkValue);
console.log(entreeValue);