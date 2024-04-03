// Coding in function countAnimals. 
// function accept two parameters: animals, 
// a string contains some animals; count, 
// an array list of which animals we should count. 
// The result should be a number array.

// Examples
// countAnimals("dog,cat",["dog","cat"]); //=> [1,1]
// countAnimals("dog,cat",["dog","cat","pig"]); //=> [1,1,0]
// countAnimals("dog,dog,cat",["dog","cat"]); //=> [2,1]
// countAnimals("dog,dog,cat",["pig","c

function countAnimals(animals, count){

    return count.map(item => {

        return (animals.match(new RegExp(item, "g")) || []).length
    })
}

console.log(countAnimals("dog,cat", ["dog","cat"]));
console.log( countAnimals("dog,dog,cat", ["pig","cow"]) ) 